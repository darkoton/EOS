import '@/assets/style/components/about.scss';
import Button from '@/components/ui/button';
import beach from '@/assets/images/gallery/beach.png';
import beach2 from '@/assets/images/gallery/beach-2.png';
import skyscraper from '@/assets/images/gallery/skyscraper.png';

export default function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__container">
          <div className="about__body">
            <div className="about__left">
              <h2 className="about__title">
                Hello <br /> I am <br /> <span className="blue">John</span>
              </h2>

              <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas erat vel odio consequat, eu consectetur ligula lacinia. Quisque sodales a urna id iaculis. Cras facilisis lorem posuere, consectetur massa et, egestas enim.</p>

              <Button weight="700" color="#3624ea" text="Contact with me" />
            </div>

            <div className="about__right">
              <div className="about__gallery">
                <div className="about__gallery-top">
                  <div className="about__gallery-img-body">
                    <img src={beach} alt="Beach" className="about__gallery-img" />
                  </div>
                  <div className="about__gallery-img-body">
                    <img src={skyscraper} alt="Beach" className="about__gallery-img" />
                  </div>
                </div>

                <div className="about__gallery-down">
                  <div className="about__gallery-img-body">
                    <img src={beach2} alt="Beach" className="about__gallery-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
