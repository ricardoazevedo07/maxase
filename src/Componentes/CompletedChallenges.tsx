import style from '../styles/components/completedChallenges.module.css';

export function CompletedChallenges(){
    return (
        <div className={style.completedChallengesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}