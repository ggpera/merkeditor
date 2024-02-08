import { useEffect, useState } from 'react';
import styles from './Pixel.module.css';

type Props = {
  binary: number;
  toggleBinaryValue: () => void;
};

const Pixel = ({ binary, toggleBinaryValue }: Props) => {
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

export default Pixel;
