import PropTypes from 'prop-types';

export default function Button({ text = 'text', onClick, color, weight = '400' }) {
  return (
    <button className="button" onClick={onClick} style={{ color: color, fontWeight: weight }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,

  weight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
