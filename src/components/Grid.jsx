import { useState } from 'react';
import PropTypes from 'prop-types';
import { arrayChunk } from '../utils/arrays';
import Pixel from './Pixel';

const Grid = ({ character }) => {
  const [binaryArray, setBinaryArray] = useState(character);

  // Set the binary value of an item to be 0 or 1
  const toggleBinaryValue = (index) => {
    const updatedBinaryArray = [...binaryArray];
    updatedBinaryArray[index] = 1 - updatedBinaryArray[index]; // Toggle between 0 and 1
    setBinaryArray(updatedBinaryArray);
  };

  // Zero the array with clear button
  const resetBinaryArray = () => {
    const updatedBinaryArray = [...binaryArray];
    updatedBinaryArray.fill(0);
    setBinaryArray(updatedBinaryArray);
  };

  // Split the original array of 42 items into two arrays, each containing 21 items
  const binaryChunks = arrayChunk(binaryArray, 21);

  console.log(binaryArray);

  return (
    <>
      <div className='grid'>
        {arrayChunk(binaryArray, 6).map((row, rowIndex) => (
          <div key={rowIndex} className='row'>
            {row.map((binary, colIndex) => {
              const totalIndex = rowIndex * 6 + colIndex;
              return (
                <Pixel
                  key={totalIndex}
                  binary={binary}
                  toggleBinaryValue={() => toggleBinaryValue(totalIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div>{parseInt(binaryChunks[0].join(''), 2)}</div>
      <div>{parseInt(binaryChunks[1].join(''), 2)}</div>
      <button style={{ padding: '0.5rem' }} onClick={resetBinaryArray}>
        Clear
      </button>
      <button style={{ padding: '0.5rem', marginLeft: '1rem' }}>Save</button>
    </>
  );
};
Grid.propTypes = {
  character: PropTypes.array,
};
export default Grid;
