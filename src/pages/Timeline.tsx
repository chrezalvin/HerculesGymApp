import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonList, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useRef, useState } from "react";
import Timer from "./timer";
import repsData from "../assets/repsData.json";

interface Set{
    name: string,
    duration: number,
    description: string,
    finished?: boolean,
}

interface Timeline{
    name: string,
    listSet: Set[],
}

const c_listTimeline: Timeline[] = repsData;

const Timeline: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [listTimeline, setListTimeline] = useState<Timeline[]>(c_listTimeline);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    // current timeline index for modal
    const [currentTimeline, setCurrentTimeline] = useState<number | null>(null);

    function finishSet(timelineIndex: number, setIndex: number){
        setListTimeline(
            listTimeline.map((timeline, index) => {
                if(index == timelineIndex){
                    return {
                        name: timeline.name,
                        listSet: timeline.listSet.map((set, index) => {
                            if(index == setIndex){
                                return {
                                    name: set.name,
                                    description: set.description,
                                    duration: set.duration,
                                    finished: true,
                                }
                            }
                            return set;
                        })
                    }
                }
                return timeline;
            })
        )
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton 
                            text={"test"}
                        />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                
                <IonList>
                    {
                        listTimeline.map((ele, index) => (
                            <IonItem>
                                <IonButton
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
                                {currentTimeline == null ? "" : listTimeline[currentTimeline].name}
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
                                    timelineName={listTimeline[currentTimeline!].name}
                                    onSetFinished={(index) => {
                                        finishSet(currentTimeline!, index);
                                    }}

                                    sets={listTimeline[currentTimeline!].listSet}
                                />
                            )
                        }
                    </IonContent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default Timeline;