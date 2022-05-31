import styles from './Card.module.scss';

const Card = (props: any) => <div className={styles.card}>
    {props.children}
</div>

export default Card