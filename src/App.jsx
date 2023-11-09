import './App.css';
import { useState } from 'react';
import Grid from './components/Grid';
import CharacterSet from './components/CharacterSet';
import characters from './characters.json';

const App = () => {
  const [character, setCharacter] = useState(characters.set[0].binaryArray);

  const setEditCharacter = (char) => {
    setCharacter(char.binaryArray);
  };
  console.log(character);
  return (
    <div className='App'>
      <div className='character-set'>
        <CharacterSet characters={characters.set} setEditCharacter={setEditCharacter} />
      </div>
      <Grid key={character} character={character} />
    </div>
  );
};

export default App;
