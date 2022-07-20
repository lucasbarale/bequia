
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ContentWrapper from './containers/ContentWrapper';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
