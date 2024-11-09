import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../src/assets/components/SideBar';
import Quiz from '../src/assets/components/Quiz';
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className='Left-content'>
          <SideBar />
        </div>
        <div className='Right-content'>
          <div className='Main-content'>
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
