import styles from './Editor.module.css';
import { useState } from 'react';
import Grid from '../Grid/Grid';
import CharacterSet from '../CharacterSet/CharacterSet';
import data from '../../data/characters.json';
import { Character, Characters } from '../../types';

const Editor = () => {
  const [characters, setCharacters] = useState<Characters>(data);
  const [character, setCharacter] = useState<Array<number>>(characters.set[0].binaryArray);
  const [charIndex, setCharIndex] = useState<number>(0);

  // Set character from set to be edited
  const setEditCharacter = (char: Character, index: number) => {
    setCharacter(char.binaryArray);
    setCharIndex(index);
  };
  // Save updated character to character set and re-render
  const saveCharacters = (char: Array<number>) => {
    const updatedCharacters = { ...characters };
    updatedCharacters.set[charIndex].binaryArray = char;
    setCharacters(updatedCharacters);
  };
  console.log(character);

  return (
    <div className={styles.editor}>
      <div className={styles.grid}>
        <Grid key={charIndex} charBinary={character} saveCharacters={saveCharacters} />
      </div>
      <div className={styles.characterSet}>
        <CharacterSet
          key={characters.id}
          characters={characters.set}
          setEditCharacter={setEditCharacter}
        />
      </div>
    </div>
  );
};

export default Editor;
