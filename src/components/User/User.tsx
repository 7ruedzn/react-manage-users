import Card from '../Card/Card';
import styles from './User.module.scss';

const User = (props : any) => {
    return (
        <Card>
            <li className={styles.user}>
                <h2>{props.text}</h2>
            </li>
        </Card>
    )
}

export default User