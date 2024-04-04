import './assets/global.css';
import Editor from './components/Editor/Editor';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Editor />
    </div>
  );
};

export default App;
