import { IonAlert, IonApp, IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import { useState, useRef } from "react";
import InputControl from "../components/bmi/InputControl";
import BmiControls from "../components/bmi/BmiControls";
import BmiResult from "../components/bmi/BmiResult";
import { chevronBack } from "ionicons/icons";


const BmiCalculator: React.FC = () => {
    const [calculatedBMI, setCalculatedBMI] = useState<number>();
    const [status, setStatus] = useState<string | undefined>();
    const [error, setError] = useState<string>();
    const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);
  
    const calculateBMI = () => {
      const enteredWeight = weightInputRef.current!.value;
      const enteredHeight = heightInputRef.current!.value;
  
      if (!enteredWeight || !enteredHeight) return;
  
      const bmi = +enteredWeight / ((+enteredHeight / 100) * (+enteredHeight / 100));
  
      let status;
  
      if (isNaN(bmi)) {
        status = 'Tidak ada imputan';
      } else if (bmi <= 18.5) {
        status = 'Kurus';
      } else if (bmi <= 25) {
        status = 'Normal';
      } else if (bmi <= 30) {
        status = 'Gemuk';
      } else if (bmi > 30) {
        status = 'Obesitas';
      }
      setCalculatedBMI(bmi);
      setStatus(status);
  
      if (!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0) {
        setError('Please enter a valid (non-negative) input number');
        return;
      }
  
      let heightMeters, weightKg;
      if (calcUnits === 'cmkg') {
        heightMeters = +enteredHeight / 100;
        weightKg = +enteredWeight;
      } else {
        heightMeters = +enteredHeight * 0.0328;
        weightKg = +enteredWeight * 2.2;
      }
    };
    const resetInputs = () => {
      weightInputRef.current!.value = '';
      heightInputRef.current!.value = '';
      setStatus(undefined);
      setCalculatedBMI(undefined);
    };
  
    const clearError = () => {
      setError(undefined); // Set error state to undefined to close the alert
    };
  
    const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
      setCalcUnits(selectedValue);
    };
    return (
      <IonPage>
        <IonAlert isOpen={!!error} message={error} buttons={[{ text: 'Okay', handler: clearError }]} />
        <IonApp>
          <IonHeader>
            <IonToolbar className="justify-content-between d-flex align-items-center">
              <IonTitle>BMI CALCULATOR</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding-horizontal">
          <IonGrid>
              <IonRow>
                <IonCol>
                  <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
                </IonCol>
              </IonRow>
            </IonGrid>
              <IonGrid  style={{"maxWidth": "560px"}}>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Tinggi Badan ({calcUnits === 'cmkg' ? 'cm' : 'feet'})</IonLabel>
                      <IonInput type="number" ref={heightInputRef}></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Berat Badan ({calcUnits === 'ftlbs' ? 'lbs' : 'kg'})</IonLabel>
                      <IonInput ref={weightInputRef}></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <BmiControls onCalculate={calculateBMI} onReset={resetInputs} />
                {calculatedBMI && (
                  <IonRow>
                    <IonCol className="ion-padding">
                      <IonCard>
                        <BmiResult bmi={calculatedBMI} bmiCategory={status ?? ''} />
                      </IonCard>
                    </IonCol>
                  </IonRow>
                )}
              </IonGrid>
          </IonContent>
        </IonApp>
      </IonPage>
    );
}

export default BmiCalculator;