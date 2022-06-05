import { useRef, useState } from "react";
import Card from "../Card/Card";
import Message from "../Message/Message";
import styles from './AddUser.module.scss';

const AddUser = (props : any) => {
    const username = useRef<HTMLInputElement>(null)
    const age = useRef<HTMLInputElement>(null!)

    const [count, setCount] = useState(0)
    const [message, setMessage] = useState({type: '', text: ''})

    const SubmitHandler = (e : any) => {
        e.preventDefault();
        let usernameEntered = username.current?.value;
        let ageEntered = parseInt(age.current?.value);

        if(usernameEntered?.trim().length !== 0 && ageEntered > 0 && ageEntered <= 125){
            const newUser = {
                username: usernameEntered,
                age: ageEntered,
                id: count
            }

            props.newUser(newUser)

            if(username.current) username.current.value = '';
            age.current.value = '';
            
            setMessage({type: 'success', text: 'The user was added!'})
            setCount((prevCount) => prevCount + 1 )
        } else if(ageEntered <= 0 || ageEntered > 125) {
            setMessage({
                type: 'error',
                text: 'The age needs to be greater than 0 and less than 125'
            })
        } else if(usernameEntered?.trim().length === 0){
            setMessage({
                type: 'error',
                text: 'The username is a required field'
            })
        } else if(age.current.value === ""){
            setMessage({
                type: 'error',
                text: 'The age is a required field'
            })
        }

        return
    }

    return (
        <Card>
            {message.text !== '' && message.type !== '' && <Message text={message.text} type={message.type} />}
            <form onSubmit={SubmitHandler} className={styles['add-user']}>
                <label htmlFor="username">Username</label>
                <input ref={username} type="text"/>
                <label htmlFor="age">Age</label>
                <input ref={age} type="number"/>
                <button type="submit">Add User</button>
            </form>
        </Card>
    )
}

export default AddUser