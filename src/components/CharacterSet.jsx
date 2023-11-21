import PropTypes from 'prop-types';
import { arrayChunk } from '../utils/arrays';
// Render character set on the right side of the screen
const CharacterSet = ({ characters, setEditCharacter }) => {
  return (
    <>
      <div className='character-set'>
        {characters.map((character, index) => (
          <button
            key={index}
            className='set-grid'
            onClick={() => setEditCharacter(character, index)}
          >
            {arrayChunk(character.binaryArray, 6).map((row, rowIndex) => (
              <div key={rowIndex} className='row'>
                {row.map((binary, colIndex) => {
                  const totalIndex = rowIndex * 6 + colIndex;
                  return (
                    <div
                      key={totalIndex}
                      className='set-pixel'
                      style={{ backgroundColor: binary === 0 ? '#FFFFFF' : '#000000' }}
                    ></div>
                  );
                })}
              </div>
            ))}
          </button>
        ))}
      </div>
    </>
  );
};
CharacterSet.propTypes = {
  characters: PropTypes.array,
  setEditCharacter: PropTypes.func,
};
export default CharacterSet;
