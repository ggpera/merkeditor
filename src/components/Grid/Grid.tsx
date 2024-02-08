import styles from './Grid.module.css';
import Pixel from '../Pixel/Pixel';
import { useState } from 'react';
import { arrayChunk } from '../../utils/arrays';

type Props = {
  charBinary: Array<number>;
  saveCharacters: (array: Array<number>) => void;
};
const Grid = ({ charBinary, saveCharacters }: Props) => {
  const [binaryArray, setBinaryArray] = useState(charBinary);

  // Set the binary value of an item to be 0 or 1
  const toggleBinaryValue = (index: number) => {
    const updatedBinaryArray = [...binaryArray];
    updatedBinaryArray[index] = 1 - updatedBinaryArray[index]; // Toggle between 0 and 1
    setBinaryArray(updatedBinaryArray);
  };

  // Zero the array and empty the grid with clear button
  const clearBinaryArray = () => {
    const updatedBinaryArray = [...binaryArray];
    updatedBinaryArray.fill(0);
    setBinaryArray(updatedBinaryArray);
  };

  // Reset binary array and fill the grid with the initial character
  const resetBinaryArray = () => {
    let updatedBinaryArray = [...binaryArray];
    updatedBinaryArray = charBinary;
    setBinaryArray(updatedBinaryArray);
  };

  // Split the original array of 42 items into two arrays, each containing 21 items
  const binaryChunks = arrayChunk(binaryArray, 21);

  console.log(binaryArray);

  return (
    <>
      <div>
        {arrayChunk(binaryArray, 6).map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
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
      <div className={styles.binary}>
        <div>{parseInt(binaryChunks[0].join(''), 2)}</div>
        <div>{parseInt(binaryChunks[1].join(''), 2)}</div>
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.btn} onClick={clearBinaryArray}>
          Clear character
        </button>
        <button className={styles.btn} onClick={resetBinaryArray}>
          Reset character
        </button>
        <button className={styles.btn} onClick={() => saveCharacters(binaryArray)}>
          Save character
        </button>
      </div>
    </>
  );
};

export default Grid;
