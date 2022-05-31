import './App.css'
import AddUser from './components/AddUser/AddUser';
import User from './components/User/User';

let users : any = [];

function App() {

  const NewUser = (newUser : object) => {
    users = [...users, newUser];
  }

  return (
    <div className="App">
      <AddUser newUser={NewUser}/>
      {
        users.map((user : any) => {
          return <User text={`${user.username} (${user.age} years old)`} />
        })
      }
    </div>
  )
}

export default App;
