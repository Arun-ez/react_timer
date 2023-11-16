import { useEffect, useMemo, useState } from "react"

let timerId;

const useTimer = (secondsInput = 60) => {

    const [running, setRunning] = useState(false);
    const [rounds, setRounds] = useState(secondsInput);

    const seconds = String(rounds % 60).padStart(2, '0');
    const minutes = Math.floor((rounds % 3600) / 60);
    const progress = 100 - Math.floor((100 / secondsInput) * rounds);

    const stopTimer = () => {
        setRunning(false);
        clearInterval(timerId);
    }

    const startTimer = () => {

        setRunning(true);

        if (rounds === 0) {
            setRounds(secondsInput);
        }

        timerId = setInterval(() => {
            setRounds((prev) => {

                if (prev !== 0) return prev - 1;

                stopTimer();
                return 0;

            })
        }, 1000)

    }

    const resetTimer = () => {
        setRounds(120);
    }

    const toggleTimer = () => {

        if (running) {
            stopTimer();
        } else {
            startTimer();
        }
    }

    useMemo(() => {
        document.title = `${String(minutes).padStart(2, '0')} : ${seconds} | React Timer`;
    }, [minutes, seconds])

    useEffect(() => {

        startTimer();

        return () => { clearInterval(timerId) }
    }, [])

    return [seconds, minutes, progress, running, resetTimer, toggleTimer];
}


export { useTimer }