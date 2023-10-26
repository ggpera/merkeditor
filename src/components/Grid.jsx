import Row from './Row';
import '../App.css';

const Grid = () => {
  let rows = [];

  for (let i = 0; i < 7; i++) {
    rows.push(<Row key={i} />);
  }
  return (
    <div id='grid'>
      <div id='pixels'>{rows}</div>
    </div>
  );
};

export default Grid;
