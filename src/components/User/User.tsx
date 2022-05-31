import styles from './User.module.scss';

const User = (props : any) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}

export default User