import PropTypes from 'prop-types';
import cn from 'classnames';
import { useState } from 'react';
import '@/assets/style/components/menu.scss';

export default function Menu({ items }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className={cn('menu', active && 'active')}>
        {items.map(item => (
          <a href={item.href} key={item.id} className="menu__item" onClick={() => setActive(false)}>
            {item.title}
          </a>
        ))}
      </nav>

      <div className={cn('burger', active && 'active')} onClick={() => setActive(!active)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      href: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Menu.defaultProps = {
  items: [],
};
