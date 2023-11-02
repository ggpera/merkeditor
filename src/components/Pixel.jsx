import { useState } from 'react';
import PropTypes from 'prop-types';

const Pixel = ({ binary, toggleBinaryValue }) => {
  const [color, setColor] = useState('#FFFFFF');
  const [pixelBinary, setPixelBinary] = useState(binary);

  const paintPixel = () => {
    if (pixelBinary === 0) {
      setColor('#000000');
      setPixelBinary(1);
      toggleBinaryValue();
    } else {
      removeColor();
    }
  };
  const removeColor = () => {
    setColor('#FFFFFF');
    setPixelBinary(0);
    toggleBinaryValue();
  };
  const changeColorOnEnter = () => {
    if (pixelBinary === 0) {
      setColor('#000000');
    }
  };
  const changeColorOnLeave = () => {
    if (pixelBinary === 0) {
      setColor('#FFFFFF');
    }
  };

  return (
    <div
      className='pixel'
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
