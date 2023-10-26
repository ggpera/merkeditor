import Pixel from './Pixel';
import '../App.css';

const Row = () => {
  let pixels = [];

  for (let i = 0; i < 6; i++) {
    pixels.push(<Pixel key={i} />);
  }

  return <div className='row'>{pixels}</div>;
};
export default Row;
