import React from 'react';
import {
  IonApp,
  IonSelect,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonAlert,
  IonCol,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
  setupIonicReact,
  IonContent,
  IonSelectOption,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/react';

interface Props {
  bmr: number;
  bmrCategory: string;
}

const BmrResult: React.FC<Props> = ({ bmr, bmrCategory }) => {
  const array = {
    'Sedentary: little or no exercise': 1759.2,
    'Exercise 1-3 times/week': 2015.75,
    'Exercise 4-5 times/week': 2272.3,
    'Daily exercise or intense exercise 3-4 times/week': 2528.85,
    'Intense exercise 6-7 times/week': 2785.4,
  };
  //   const arrayUi = array.map();

  const map: Map<string, number> = new Map<string, number>();

  map.set('Sedentary: little or no exercise', bmr * 1.2);
  map.set('Exercise 1-3 times/week', bmr * 1.375);
  map.set('Exercise 4-5 times/week', bmr * 1.55);
  map.set('Daily exercise or intense exercise 3-4 times/week', bmr * 1.725);
  map.set('Intense exercise 6-7 times/week', bmr * 1.9);

  return (
    <IonCard>
      <IonCardHeader>
        <h3><strong>BMR ANDA: {bmr.toFixed(2)}</strong></h3>
        <IonCardSubtitle>Daily Calories Needs based on Activity Level</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonRow>
          <IonCol className="ion-text">
            <strong>Activity Level</strong>
          </IonCol>
          <IonCol className="ion-text-end">
            <strong>Calorie</strong>
          </IonCol>
        </IonRow>
        {Array.from(map).map(([key, value]) => (
          <IonRow>
            <IonCol className="ion-text">{key}</IonCol>
            <IonCol className="ion-text-end">{value.toFixed(2)}</IonCol>
          </IonRow>
        ))}
      </IonCardContent>
    </IonCard>
  );
};
export default BmrResult;
