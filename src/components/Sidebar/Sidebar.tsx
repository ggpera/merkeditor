import styles from './Sidebar.module.css';

type Props = {
  handleOpen: () => void;
};
const Sidebar = ({ handleOpen }: Props) => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.btn} onClick={handleOpen}>
        Export
      </button>
    </div>
  );
};

export default Sidebar;
