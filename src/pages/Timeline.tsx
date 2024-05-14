import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import Timer from "./Timer";
import { RouteComponentProps } from "react-router";
import {type Challenge, Timeline, Set } from "../assets/challenges";

interface TimelineProps extends RouteComponentProps<{
    challengeType: string;
}>{
    challengeList: Challenge[];
    onSetFinished: (challengeType: string, timelineIndex: number, setIndex: number) => void;
}

const TimelinePage: React.FC<TimelineProps> = ({match, challengeList, onSetFinished}) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [currentChallenge, setCurrentChallenge] = useState<Challenge>();

    // current timeline index for modal
    const [currentTimeline, setCurrentTimeline] = useState<number>(0);

    useEffect(() => {
        // get path name
        const challengeType = match.params.challengeType;
        const challenge: Challenge | undefined = challengeList.find((challenge) => challenge.type == challengeType);

        if(challenge){
            setCurrentChallenge(challenge);
        }
    }, []);

    function finishSet(timelineIndex: number, setIndex: number){
        onSetFinished(match.params.challengeType, timelineIndex, setIndex);
    }

    const timelines: Timeline[] | undefined = currentChallenge?.repsData;

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="warning">
                <IonTitle >
                    {currentChallenge?.title}
                </IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {
                        timelines?.map((ele, index) => (
                            <IonItem key={ele.name}>
                                <IonButton color="warning"
                                    style={{width: "100%", height: "100%"}}
                                    onClick={() => {
                                        // set the current index here
                                        setCurrentTimeline(index);
                                        setModalIsOpen(true);
                                    }}
                                >
                                    {ele.name} ({ele.listSet.filter((set) => set.finished).length} / {ele.listSet.length})
                                </IonButton>
                            </IonItem>
                        ))
                    }
                </IonList>
                <IonModal 
                    ref={modal} 
                    isOpen={modalIsOpen}
                    onDidDismiss={() => {
                        setModalIsOpen(false);
                    }}
                >
                    <IonHeader>
                        <IonToolbar 
                            slot="start"
                        >
                            <IonTitle>
                                {timelines?.[currentTimeline].name}
                            </IonTitle>
                            <IonButtons slot="start">
                                <IonButton
                                    onClick={() => {
                                        modal.current?.dismiss()
                                    }}
                                >
                                    {"<"} Back
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        {
                            currentTimeline == null ? null : (
                                <Timer 
                                    timelineName={timelines?.[currentTimeline].name ?? ""}
                                    onSetFinished={(index) => {
                                        finishSet(currentTimeline!, index);
                                    }}

                                    sets={timelines?.[currentTimeline].listSet ?? []}
                                />
                            )
                        }
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default TimelinePage;