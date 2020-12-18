import {
  GET_TRIPS,
  GET_SINGLE_TRIP,
  CLEAR_CURRENT_TRIP,
  TRIP_ERROR,
  SEARCH_TRIP,
} from '../actions/types';

const initialState = {
  trips: [
    {
      id: 5004,
      date: '2020-02-27T12:50:09',
      date_gmt: '2020-02-27T11:50:09',
      guid: { rendered: 'http://hunter.polkowice.pl/?post_type=wyprawy&#038;p=5004' },
      modified: '2020-02-27T12:52:16',
      modified_gmt: '2020-02-27T11:52:16',
      slug: 'u-boot-h-m-s-otus-w-sassnitz',
      status: 'publish',
      type: 'wyprawy',
      link: 'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/',
      title: { rendered: 'U-Boot H.M.S Otus w Sassnitz- Niemcy' },
      content: {
        rendered:
          '\n<p>Okr\u0119t podwodny HMS Otus to brytyjska \u0142\u00f3d\u017a podwodna. Okr\u0119t p\u0142ywa\u0142 na morzu od roku 1962 do 1990. Zako\u0144czy\u0142 swoj\u0105 s\u0142u\u017cb\u0119 w porcie Portsmouth. <span class="style-scope yt-formatted-string" dir="auto">Okr\u0119t podwodny HMS Otus to obecnie muzeum, kt\u00f3re mo\u017cna zwiedza\u0107 w porcie w Sassnitz.</span></p>\n\n\t\t<style type="text/css">\n\t\t\t#gallery-1 {\n\t\t\t\tmargin: auto;\n\t\t\t}\n\t\t\t#gallery-1 .gallery-item {\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-top: 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t\t#gallery-1 img {\n\t\t\t\tborder: 2px solid #cfcfcf;\n\t\t\t}\n\t\t\t#gallery-1 .gallery-caption {\n\t\t\t\tmargin-left: 0;\n\t\t\t}\n\t\t\t/* see gallery_shortcode() in wp-includes/media.php */\n\t\t</style>\n\t\t<div id=\'gallery-1\' class=\'gallery galleryid-5004 gallery-columns-3 gallery-size-thumbnail\'><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2147/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2147-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2142/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2142-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2137/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2137-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><br style="clear: both" /><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2134/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2134-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/dscn1711/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/DSCN1711-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/dscn1710/\'><img width="160" height="156" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/DSCN1710-160x156.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><br style="clear: both" /><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/dscn1708/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/DSCN1708-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl>\n\t\t\t<br style=\'clear: both\' />\n\t\t</div>\n\n',
        protected: false,
      },
      featured_media: 0,
      template: '',
      acf: { termin_wyprawy: '2019-08-30', czy_dodac_lokalizacje: ['1'], lokalizacja: '' },
      _links: {
        self: [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/5004' }],
        collection: [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy' }],
        about: [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/types/wyprawy' }],
        'wp:attachment': [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/media?parent=5004' }],
        curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
      },
    },
    {
      id: 5004,
      date: '2020-02-27T12:50:09',
      date_gmt: '2020-02-27T11:50:09',
      guid: { rendered: 'http://hunter.polkowice.pl/?post_type=wyprawy&#038;p=5004' },
      modified: '2020-02-27T12:52:16',
      modified_gmt: '2020-02-27T11:52:16',
      slug: 'u-boot-h-m-s-otus-w-sassnitz',
      status: 'publish',
      type: 'wyprawy',
      link: 'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/',
      title: { rendered: 'U-Boot H.M.S Otus w Sassnitz- Niemcy' },
      content: {
        rendered:
          '\n<p>Okr\u0119t podwodny HMS Otus to brytyjska \u0142\u00f3d\u017a podwodna. Okr\u0119t p\u0142ywa\u0142 na morzu od roku 1962 do 1990. Zako\u0144czy\u0142 swoj\u0105 s\u0142u\u017cb\u0119 w porcie Portsmouth. <span class="style-scope yt-formatted-string" dir="auto">Okr\u0119t podwodny HMS Otus to obecnie muzeum, kt\u00f3re mo\u017cna zwiedza\u0107 w porcie w Sassnitz.</span></p>\n\n\t\t<style type="text/css">\n\t\t\t#gallery-1 {\n\t\t\t\tmargin: auto;\n\t\t\t}\n\t\t\t#gallery-1 .gallery-item {\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-top: 10px;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth: 33%;\n\t\t\t}\n\t\t\t#gallery-1 img {\n\t\t\t\tborder: 2px solid #cfcfcf;\n\t\t\t}\n\t\t\t#gallery-1 .gallery-caption {\n\t\t\t\tmargin-left: 0;\n\t\t\t}\n\t\t\t/* see gallery_shortcode() in wp-includes/media.php */\n\t\t</style>\n\t\t<div id=\'gallery-1\' class=\'gallery galleryid-5004 gallery-columns-3 gallery-size-thumbnail\'><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2147/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2147-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2142/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2142-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2137/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2137-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><br style="clear: both" /><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/imag2134/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/IMAG2134-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/dscn1711/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/DSCN1711-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/dscn1710/\'><img width="160" height="156" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/DSCN1710-160x156.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl><br style="clear: both" /><dl class=\'gallery-item\'>\n\t\t\t<dt class=\'gallery-icon landscape\'>\n\t\t\t\t<a href=\'https://hunter.polkowice.pl/wyprawy/u-boot-h-m-s-otus-w-sassnitz/dscn1708/\'><img width="160" height="160" src="https://hunter.polkowice.pl/wp-content/uploads/2020/02/DSCN1708-160x160.jpg" class="attachment-thumbnail size-thumbnail" alt="" loading="lazy" /></a>\n\t\t\t</dt></dl>\n\t\t\t<br style=\'clear: both\' />\n\t\t</div>\n\n',
        protected: false,
      },
      featured_media: 0,
      template: '',
      acf: { termin_wyprawy: '2019-08-30', czy_dodac_lokalizacje: ['1'], lokalizacja: '' },
      _links: {
        self: [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy/5004' }],
        collection: [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/wyprawy' }],
        about: [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/types/wyprawy' }],
        'wp:attachment': [{ href: 'https://hunter.polkowice.pl/wp-json/wp/v2/media?parent=5004' }],
        curies: [{ name: 'wp', href: 'https://api.w.org/{rel}', templated: true }],
      },
    },
  ],
  singleTrip: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRIPS:
      return {
        ...state,
        loading: true,
      };

    case GET_SINGLE_TRIP:
      return {
        ...state,
        current: action.payload,
      };

    case SEARCH_TRIP:
      return {
        ...state,
        logs: action.payload,
      };

    case CLEAR_CURRENT_TRIP:
      return {
        ...state,
        current: null,
      };

    case TRIP_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
