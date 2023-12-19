
import styles from './Button.module.scss';

const Button = ({ onClick, children, isDisabled=false}) => {
    return (<button  disabled={isDisabled} className={styles.button} onClick={onClick}>{children}</button>);
};

export default Button;