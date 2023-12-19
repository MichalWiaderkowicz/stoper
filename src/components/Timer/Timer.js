import styles from './Timer.module.scss';

/* Stwórz dodatkowy komponent, którego zadaniem będzie renderowanie odliczanego czasu.
Komponent ten powinien przyjmować w formie parametru liczbę milisekund,
a następnie renderować czas w formacie HH:mm:ss.ms.
Do konwersji na poprawny format możesz użyć dodatkowej funkcji, 
 oczywiście musisz napisać od zera. Jak powinna wyglądać funkcja,
 która otrzymuje czas w miliesekundach, a zwraca czas w formacie HH:mm:ss.ms?
 Bardzo pomocny może być tutaj wujek Google ;) */
const Timer = ({ time }) => {
    const timeFormat = (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000);
        milliseconds %= 1000;
        const minutes = Math.floor(seconds / 60);
        milliseconds %= 60;
        const hours = Math.floor(minutes / 60);
        milliseconds %= 60;
        const timerHours = String(hours).padStart(2, '0');
        const timerMinutes = String(minutes).padStart(2, '0');
        const timerSeconds = String(seconds).padStart(2, '0');
        const timerMilliseconds = String(milliseconds).padStart(1, '0');
        return `${timerHours}:${timerMinutes}:${timerSeconds}.${timerMilliseconds}`
    };
    return (
        <div className={styles.timer}>
            {timeFormat(time)}
        </div>
    );
};
export default Timer;