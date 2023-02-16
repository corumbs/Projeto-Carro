import './style.css';
import Box from './components/Box';
import List from './components/List';


function App() {

  return (

    <div className="container">
      <div className="box">
        <Box />
        <div className="main">
          <List />
          <div className="viewCars">

          </div>
        </div>
      </div>
    </div>

  )
}

export default App
