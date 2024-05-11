import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle } from "@ionic/react";
import { useEffect, useState } from "react";

interface Set{
    name: string,
    duration: number,
    description: string,
    finished?: boolean,
}

interface TimerProp{
    timelineName: string,
    sets: Set[],
    onSetFinished: (setId: number) => void
}

const Timer: React.FC<TimerProp> = (props: TimerProp) => {
    const [time, setTime] = useState<number>(0);
    const [isCountdown, setIsCountdown] = useState<boolean>(false);
    const [indexSet, setIndexSet] = useState<number>(0);

    useEffect(() => {
        let countdown: NodeJS.Timer;
        if (isCountdown) {
            countdown = setInterval(() => {
                if (time > 0) {
                    setTime(prevSeconds => prevSeconds - 1);
                }
                else
                    switchSet();
            }, 1000);
        }

        return () => clearInterval(countdown);
    }, [isCountdown, time]);

    function timerStartOrPause(){
        if(isCountdown == true){
            setIsCountdown(false);
        }
        else{
            setIsCountdown(true);
        }

        if(time == 0){
            setTime(props.sets[indexSet].duration);
        }
    }

    function resetTimer(){
        setTime(props.sets[indexSet].duration);
        setIsCountdown(false);
    }

    function switchSet(){
        setIndexSet(prevIndex => prevIndex + 1);
        setTime(props.sets[indexSet].duration);
        setIsCountdown(false);

        props.onSetFinished(indexSet);
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <h1>Timer {time} | Current Set: {props.sets[indexSet].name}</h1>

                <IonList>
                    {
                        props.sets.map((ele, index) => (
                            <IonItem 
                                style={{"padding": 0, "margin": 0}}
                                // color={index === indexSet ? "primary": "secondary"}
                            >
                                <IonButton
                                    style={{"width": "100%", "height": "100%"}}
                                    color={ele.finished ? "success" : index === indexSet ? "primary": "secondary"}
                                    onClick={() => {
                                        if(ele.finished || index == props.sets.filter(set => set.finished).length + 1){
                                            setIndexSet(index);
                                            setTime(props.sets[index].duration);
                                        }
                                    }}
                                >
                                    {ele.name}
                                </IonButton>
                                {/* {ele.name} */}
                            </IonItem>
                        ))
                    }
                </IonList>

                <IonButton 
                    onClick={() => timerStartOrPause()}
                    color={isCountdown ? "danger" : "primary"}
                >
                    {isCountdown ? "Stop" : "Mulai Latihan"}
                </IonButton>

                <IonButton
                    onClick={() => resetTimer()}
                >
                    Reset
                </IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Timer;