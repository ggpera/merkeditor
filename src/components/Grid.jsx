import { useState } from 'react';
import Pixel from './Pixel';
import '../App.css';

const Grid = () => {
  const [binaryArray, setBinaryArray] = useState(new Array(42).fill(0));

  const toggleBinaryValue = (index) => {
    const updatedBinaryArray = [...binaryArray];
    updatedBinaryArray[index] = 1 - updatedBinaryArray[index]; // Toggle between 0 and 1
    setBinaryArray(updatedBinaryArray);
  };
  const arrayChunk = (arr, n) => {
    const array = arr.slice();
    const chunks = [];
    while (array.length) chunks.push(array.splice(0, n));
    return chunks;
  };
  const resetBinaryArray = () => {
    const updatedBinaryArray = [...binaryArray];
    updatedBinaryArray.fill(0);
    setBinaryArray(updatedBinaryArray);
  };
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
    </>
  );
};

export default Grid;
