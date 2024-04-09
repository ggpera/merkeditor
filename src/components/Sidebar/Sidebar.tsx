import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.btn}>Export</button>
    </div>
  );
};

export default Sidebar;
