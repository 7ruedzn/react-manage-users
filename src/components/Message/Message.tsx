import styles from './Message.module.scss';

interface Props {
    text: string
    type: string
}

const Message = (props : Props) => {
    return (
        <div className={`${styles.message} ${props.type === 'error' ? styles.error : styles.success}`}>
            <p>{props.text}</p>
        </div>
    )
}

export default Message