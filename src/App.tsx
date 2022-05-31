import './App.css'
import AddUser from './components/AddUser/AddUser';

let users : any = [];

function App() {

  const NewUser = (newUser : object) => {
    users = [...users, newUser]
  }

  return (
    <div className="App">
      <AddUser newUser={NewUser}/>

    </div>
  )
}

export default App;
