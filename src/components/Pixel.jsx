import { useState } from 'react';

const Pixel = () => {
  const [color, setColor] = useState('#FFFFFF');
  const [painted, setPainted] = useState(false);

  const paintPixel = () => {
    if (!painted) {
      setColor('#000000');
      setPainted(true);
    } else {
      removeColor();
    }
  };
  const removeColor = () => {
    setColor('#FFFFFF');
    setPainted(false);
  };
  const changeColorOnEnter = () => {
    if (!painted) {
      setColor('#000000');
    }
  };
  const changeColorOnLeave = () => {
    if (!painted) {
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
export default Pixel;
