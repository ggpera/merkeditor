import styles from './Editor.module.css';
import { useState } from 'react';
import Grid from '../Grid/Grid';
import CharacterSet from '../CharacterSet/CharacterSet';
import data from '../../data/characters.json';

const Editor = () => {
  const [characters, setCharacters] = useState(data);
  const [character, setCharacter] = useState(characters.set[0].binaryArray);
  const [charIndex, setCharIndex] = useState(0);

  // Set character from set to be edited
  const setEditCharacter = (char, index) => {
    setCharacter(char.binaryArray);
    setCharIndex(index);
  };
  // Save updated character to character set and re-render
  const saveCharacters = (char) => {
    const updatedCharacters = { ...characters };
    updatedCharacters.set[charIndex].binaryArray = char;
    setCharacters(updatedCharacters);
  };
  console.log(character);
  return (
    <div className={styles.editor}>
      <div className={styles.grid}>
        <Grid key={character} character={character} saveCharacters={saveCharacters} />
      </div>
      <div className={styles.characterSet}>
        <CharacterSet
          key={characters.set}
          characters={characters.set}
          setEditCharacter={setEditCharacter}
        />
      </div>
    </div>
  );
};

export default Editor;
