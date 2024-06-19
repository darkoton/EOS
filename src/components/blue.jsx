import '@/assets/style/components/blue.scss';
import Button from '@/components/ui/button';
import man from '@/assets/images/blue/man.png';

export default function Blue() {
  return (
    <div className="blue">
      <div className="blue__wrapper">
        <div className="blue__container">
          <div className="blue__body">
            <div className="blue__left">
              <img src={man} alt="" />
            </div>
            <div className="blue__right">
              <div className="blue__text-body">
                <h2 className="blue__title">Lorem ipsum dolor sit amet</h2>

                <p className="blue__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas erat vel odio consequat, eu consectetur ligula lacinia.</p>

                <Button text="VIEW CASE STUDY" color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
