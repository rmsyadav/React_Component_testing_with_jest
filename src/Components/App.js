import { BrowserRouter } from 'react-router-dom';
import '../Stylesheet/App.css';
import MyRoutes from './RoutesComponents/Router';

function App() {
  return (
    <div>
      <BrowserRouter>
          <MyRoutes></MyRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
