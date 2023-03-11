import GenericList from '../../shared/GenericList/GenericList';
import { assignRandomId } from '@/utils/generateRandomKey';

const USER_MENU_ITEMS = [
  {
    value: 'Help Center',
    image: 'help.svg',
    link: '#',
  },
  {
    value: 'More',
    image: 'more.svg',
    link: [
      {
        value: 'Reddit iOS',
        link: '#',
      },
      {
        value: 'Blog',
        link: '#',
      },
      {
        value: 'Press',
        link: '#',
      },
    ],
  },
  {
    value: 'Advertise',
    image: 'adveritise.svg',
    link: '#',
  },
  {
    value: 'Log In/Sign Up',
    image: 'login.svg',
    link: '#',
  },
].map((item) => assignRandomId(item));

export default function UserMenuNoAuth() {
  return <GenericList list={USER_MENU_ITEMS} />;
}
