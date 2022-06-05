import { useState } from 'react';
import styles from './App.module.scss'
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState<Array<object>>([])

  const NewUser = (newUser : any) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers]
    })
  }

    return (
      <div className={styles.app}>
        <AddUser newUser={NewUser}/>
        <UsersList users={users}/>
      </div>
    )
}

export default App;
