import Cave3 from '../assets/img/cave1.JPG';
import Team from '../assets/img/team.jpg';
import Kontakt from '../assets/img/kontakt.JPG';
import Polecane from '../assets/img/polecane.JPG';

const columns = [
  {
    label: 'Kim jesteśmy',
    id: 'kim-jestesmy',
    link: '/kim-jestesmy',
    img: Team,
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
    img: Polecane,
  },
  {
    label: 'Kontakt',
    id: 'kontakt',
    link: '/kontakt',
    img: Kontakt,
  },
];

export default columns;
