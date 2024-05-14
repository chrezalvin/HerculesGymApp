import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRouterOutlet, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import React from 'react';
import * as Ionicon from 'ionicons/icons';

const BmrControls: React.FC<{ onCalculate: () => void; onReset: () => void }> = (props) => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.onCalculate}>
          <IonIcon slot="start" icon={Ionicon.calculatorOutline}></IonIcon>
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.onReset}>
          <IonIcon slot="start" icon={Ionicon.refreshOutline}></IonIcon>
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmrControls;
