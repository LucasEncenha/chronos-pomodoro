import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import styles from './styles.module.css';

export function CountDown () {
    const { state } = useTaskContext();
    return (
        <nav className={styles.container}>{state.formattedSecondsRemaining}</nav>
    );
}

