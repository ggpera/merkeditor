import styles from './CharacterSet.module.css';
import PropTypes from 'prop-types';
import { arrayChunk } from '../../utils/arrays';
import SetButton from './SetButton/SetButton';
import { useState } from 'react';

// Render character set on the right side of the screen
const CharacterSet = ({ characters, setEditCharacter }) => {
  const [active, setActive] = useState(0);

  const handleActive = (index) => {
    setActive(index);
  };
  return (
    <>
      {characters.map((character, index) => (
        <SetButton
          key={index}
          setEditCharacter={setEditCharacter}
          character={character}
          index={index}
          active={active}
          handleActive={handleActive}
        >
          <>
            {arrayChunk(character.binaryArray, 6).map((row, rowIndex) => (
              <div key={rowIndex} className={styles.row}>
                {row.map((binary, colIndex) => {
                  const totalIndex = rowIndex * 6 + colIndex;
                  return (
                    <div
                      key={totalIndex}
                      className={styles.pixel}
                      style={{ backgroundColor: binary === 0 ? '#FFFFFF' : '#000000' }}
                    ></div>
                  );
                })}
              </div>
            ))}
          </>
        </SetButton>
      ))}
    </>
  );
};
CharacterSet.propTypes = {
  characters: PropTypes.array,
  setEditCharacter: PropTypes.func,
};
export default CharacterSet;
