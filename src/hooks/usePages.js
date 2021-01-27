import { useState, useEffect } from 'react';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';

const usePages = (url) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    let mounted = true;

    ajax(url)
      .pipe(
        map((response) => response),
        catchError((error) => of(error)),
      )
      .subscribe({
        next: (res) => {
          if (mounted) setState(res.response);
        },
        error: (err) => {
          if (mounted) setState(err.response);
        },
      });

    return () => {
      mounted = false;
    };
  }, []);

  return state;
};

export default usePages;
