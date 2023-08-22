import { BrowserRouter } from 'react-router-dom';
import List from './Todocomponents/List';
import '../Stylesheet/App.css';
import MyRoutes from './RoutesComponents/Router';

function App() {
  return (
    <div>
      <header className='App-header App-link bg-secondary'>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
          <MyRoutes></MyRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
