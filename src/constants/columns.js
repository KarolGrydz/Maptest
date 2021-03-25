import Cave3 from '../assets/img/cave3.jpg';
import Friends from '../assets/img/friends.jpg';
import Letter from '../assets/img/letter.jpg';
import Recommend from '../assets/img/recommend.jpg';
import Forest from '../assets/img/forest.jpg';

const columns = [
  {
    label: 'Kim jesteśmy?',
    id: 'kim-jestesmy',
    link: '/kim-jestesmy',
    img: Friends,
  },
  {
    label: 'Wyprawy',
    id: 'wyprawy',
    link: '/wyprawy',
    img: Cave3,
  },
  {
    label: 'Polecane',
    id: 'przyjaciele',
    link: '/przyjaciele',
    img: Recommend,
  },
  {
    label: 'Kontakt',
    id: 'kontakt',
    link: '/kontakt',
    img: Letter,
  },
];

export default columns;
