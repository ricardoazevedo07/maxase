import { Console } from 'console';
import { useEffect, useState } from 'react';

import style from '../styles/components/Countdown.module.css';
import { Profile } from './Profile';

export function Countdown(){
    let tempoPadrao = 0.1 * 60;
    const [hasFinished, setHasFinished] = useState(false);
    const [time, setTime] = useState(tempoPadrao);
    const [isActive, setIsActive] = useState(false);
    const minutes = Math.floor(time/60);
    const seconds = time%60;

    let countDownTimeOut;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2,'0').split('');
    
    function startCountdown(){
        setIsActive(true);
    }
    function resetCountdown(){
        setIsActive(false);
        clearTimeout(countDownTimeOut);
        setTime(tempoPadrao);
    }
    
    useEffect(() => {if(isActive && time > 0){
        countDownTimeOut = setTimeout(() => {
            setTime(time - 1);
        }, 1000);
    } else if(isActive && time ===0){
        console.log('finalizou');
        setHasFinished(true);
    }}, [isActive, time]);

    return (
        <div>
        <div className={style.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        {hasFinished ? 
        (<button className={style.countdownButton} disabled>Ciclo Encerrado</button>)       
        :(
    <>
         {isActive ?
         (<button className={style.countdownButtonActive} type='button' onClick={resetCountdown}>Abandonar ciclo</button>)
         :
        (<button className={style.countdownButton} type='button' onClick={startCountdown}>Iniciar ciclo</button>)
         }
    </>
        )}       
       </div>
    );
}