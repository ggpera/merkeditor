import PropTypes from 'prop-types';
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
SetButton.propTypes = {
  children: PropTypes.element,
  setEditCharacter: PropTypes.func,
  character: PropTypes.object,
  index: PropTypes.number,
  active: PropTypes.number,
  handleActive: PropTypes.func,
};
export default SetButton;
