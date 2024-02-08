import styles from './CharacterSet.module.css';
import SetButton from './SetButton/SetButton';
import { arrayChunk } from '../../utils/arrays';
import { useState } from 'react';
import { Character } from '../../types';

type Props = {
  characters: Array<Character>;
  setEditCharacter: (character: Character, index: number) => void;
};

// Render character set on the right side of the screen
const CharacterSet = ({ characters, setEditCharacter }: Props) => {
  const [active, setActive] = useState(0);

  const handleActive = (index: number) => {
    setActive(index);
  };
  return (
    <>
      {characters.map((character: Character, index: number) => (
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

export default CharacterSet;
