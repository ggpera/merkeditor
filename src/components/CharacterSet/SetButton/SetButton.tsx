import styles from './SetButton.module.css';
import { Character } from '../../../types';

type Props = {
  children: React.ReactNode;
  character: Character;
  index: number;
  active: number;
  setEditCharacter: (character: Character, index: number) => void;
  handleActive: (index: number) => void;
};

const SetButton = ({
  children,
  setEditCharacter,
  character,
  index,
  active,
  handleActive,
}: Props) => {
  return (
    <>
      <button
        className={active === index ? styles.btnActive : styles.btnDisabled}
        onClick={() => {
          handleActive(index);
          setEditCharacter(character, index);
        }}
      >
        {children}
      </button>
    </>
  );
};
export default SetButton;
