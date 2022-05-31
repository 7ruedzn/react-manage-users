import { useState } from "react";
import Card from "../Card/Card"
import styles from './AddUser.module.scss';

const AddUser = (props : any) => {

    const [username, setUsername] = useState('')
    const [age, setAge] = useState(0)

    const SubmitHandler = (e : any) => {
        e.preventDefault()
        
        const newUser = {
            username: username,
            age: age
        }
        props.newUser(newUser)
        setUsername('')
        setAge(0)
    }

    const AgeHandler = (e : any) => {
        const age = e.target.value;

        if(age > 0 || age <= 125)
            setAge(age)
    }

    const UsernameHandler = (e : any) => {
        const username = e.target.value;
        
        if(username.trim().length !== 0)
            setUsername(username)
    }


    return (
        <Card>
            <form onSubmit={SubmitHandler} className={styles['add-user']}>
                <label htmlFor="username">Username</label>
                <input type="text" onChange={UsernameHandler} value={username}/>
                <label htmlFor="age">Age</label>
                <input type="number" onChange={AgeHandler} value={age}/>
                
                <button>Add User</button>
            </form>
        </Card>
    )
}

export default AddUser