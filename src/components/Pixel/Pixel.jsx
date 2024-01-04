import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Pixel.module.css';

const Pixel = ({ binary, toggleBinaryValue }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor(binary === 0 ? '#FFFFFF' : '#000000');
  }, [binary]);

  const paintPixel = () => {
    if (binary === 0) {
      setColor('#000000');
      toggleBinaryValue();
    } else {
      removeColor();
    }
  };
  const removeColor = () => {
    setColor('#FFFFFF');
    toggleBinaryValue();
  };
  const changeColorOnEnter = () => {
    if (binary === 0) {
      setColor('#000000');
    }
  };
  const changeColorOnLeave = () => {
    if (binary === 0) {
      setColor('#FFFFFF');
    }
  };

  return (
    <div
      className={styles.pixel}
      style={{ backgroundColor: color }}
      onMouseDown={paintPixel}
      onMouseEnter={changeColorOnEnter}
      onMouseLeave={changeColorOnLeave}
    ></div>
  );
};

Pixel.propTypes = {
  binary: PropTypes.number,
  toggleBinaryValue: PropTypes.func,
};

export default Pixel;
