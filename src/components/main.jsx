import '@/assets/style/components/main.scss';
import textureText from '@/assets/images/text-texture.png';
import mouse from '@/assets/images/mouse.png';
import Header from '@/components/header';

export default function Main() {
  return (
    <div className="main">
      <Header />
      <div className="main__wrapper">
        <div className="main__container _container">
          <div className="main__body">
            <img src={textureText} alt="" className="main__title" />
            <div className="main__note">
              <img src={mouse} alt="" className="main__note-img" />
              <span className="main__note-text">Scroll to see more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
