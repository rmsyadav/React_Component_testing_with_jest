import { BrowserRouter } from 'react-router-dom';
import '../Stylesheet/App.css';
import MyRoutes from './RoutesComponents/Router';
import MyErrorBoundary from './CommonComponents/MyErrorBoundary';

function App() {
  return (
    <div>
      <MyErrorBoundary>
      <BrowserRouter>
          <MyRoutes></MyRoutes>
      </BrowserRouter>
      </MyErrorBoundary>
    </div>
  );
}

export default App;
