import './App.css';
import { HiOutlineHome} from "react-icons/hi";
import Form from './components/Form';


function App() {
  return (
    <div className="App container" style={{maxWidth: 500, margin:"1rem auto" }}>
    <h1 className='display-1 my-5'>
      {" "}
      <HiOutlineHome />
      Mortage Calculator</h1>
      <Form />
    </div>
  );
}

export default App;
