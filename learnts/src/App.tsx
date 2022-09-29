import './App.css';
import Form from './Components/form'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>Welcome to Learning Goal</h1>
      <Form first='Typescript' sec={919} third=' Dharsan' fourth='Begin' />
    </div>
  )
}

export default App;
