import PropTypes from 'prop-types';
import styles from './SetButton.module.css';

const SetButton = ({ children, setEditCharacter, character, index, active, handleActive }) => {
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
