import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import React from "react";

const InputControl: React.FC<{
    selectedValue: 'cmkg' | 'ftlbs'; onSelectValue: (value: 'cmkg' | 'ftlbs') => void}> = props => {
        const inputChangeHandler = (event:CustomEvent) => {
            props.onSelectValue(event.detail.value);
        }
    return (
        <IonSegment value={props.selectedValue} onIonChange={inputChangeHandler}>
            <IonSegmentButton value="cmkg">
                <IonLabel>cm/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;