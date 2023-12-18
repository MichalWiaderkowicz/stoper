import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>My first Stoper App</h1>
            <p className={styles.subtitle}>just an ordinary stopwatch</p>
        </div>
    );
};
export default Hero;