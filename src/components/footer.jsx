import '@/assets/style/components/footer.scss';
import logo from '@/assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container _container">
          <div className="footer__body">
            <div className="footer__main">
              <h2 className="footer__title">
                A good photographer is knowing where <br /> to stand
              </h2>
              <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est erat. In vestibulum eget nisi sed sagittis. Sed sed vulputate lacus. Pellentesque at tincidunt dui, id placerat leo. Ut porta facilisis augue et interdum. Donec turpis massa, euismod vel egestas quis, porttitor sit amet metus. Mauris condimentum suscipit cursus.</p>
            </div>

            <div className="footer__down">
              <img src={logo} alt="" className="footer__logo" />

              <p className="footer__rights">
                All rights reserved by Eos Free PSD Template by symu. <br /> Check our site{' '}
                <a href="https://github.com/darkoton" target="_blank">
                  www.symu.co
                </a>{' '}
                for more goods
              </p>

              <nav className="footer__menu">
                <a href="#" className="footer__menu-item">
                  Work
                </a>
                <a href="#" className="footer__menu-item">
                  About me
                </a>
                <a href="#" className="footer__menu-item">
                  News
                </a>
                <a href="#" className="footer__menu-item">
                  Contact
                </a>
              </nav>

              <div className="footer__creater">
                Created by{' '}
                <a href="https://github.com/darkoton" target="_blank">
                  Darkoto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
