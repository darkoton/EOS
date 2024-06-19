import logo from '@/assets/images/logo.png';
import '@/assets/style/components/header.scss';
import Menu from '@/components/header/menu.jsx';
export default function Header() {
  const menu = [
    {
      id: 1,
      title: 'Work',
      href: '#',
    },
    {
      id: 2,
      title: 'About me',
      href: '#',
    },
    {
      id: 3,
      title: 'News',
      href: '#',
    },
    {
      id: 4,
      title: 'Contact',
      href: '#',
    },
  ];

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__container _container">
          <div className="header__body">
            <div className="header__left">
              <img src={logo} alt="" className="header__logo" />
            </div>
            <div className="header__right">
              <Menu items={menu} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
