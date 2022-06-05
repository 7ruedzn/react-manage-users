import User from '../User/User'
import styles from './UsersList.module.scss'

interface Props {
    users : Array<object>
}

const UsersList = (props : Props) => {
    if(props.users.length > 0 ){
        return(
            <ul className={styles['users-list']}>
                {
                    props.users.map((user : any) => 
                        <User key={user.id} text={`${user.username} (${user.age} years old)`} />)
                }
            </ul>
        )
    }

    return (
        <h1>No users added!</h1>
    )
}

export default UsersList