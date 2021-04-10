interface Hours {
    close: string,
    open: string,
    closed: boolean,
    date: string,
}

const hour = {close: '10', open: '20', closed: false, date: '10.20'};

function getData(hours: Hours): void {
  const today:number = new Date().getDay();
  switch (today) {
    case 1:
      
      break;
    case 2:
  
      break;
    case 3:

      break;

    case 4:

      break;

    case 5:

      break;
    case 6:
      console.log('its working');
      break;
    case 7:

      break;
    default:
      break;
  }
}

const openHours = (openRaw: string, closeRaw: string) => {
  const open = openRaw.slice(openRaw.search('T') + 1, openRaw.length);
  const close = closeRaw.slice(closeRaw.search('T') + 1, closeRaw.length);
  console.log(`${open} - ${close}`);
}

getData(hour);
openHours('2021-04-09T06:00:00','2021-04-09T22:00:00');
