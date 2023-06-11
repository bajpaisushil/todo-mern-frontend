import './App.css';
import { Navbar } from './components/homePage/navbar';
import AllRoutes from './routes/allRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
