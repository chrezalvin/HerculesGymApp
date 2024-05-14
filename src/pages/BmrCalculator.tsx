import { IonAlert, IonApp, IonHeader, IonToolbar, IonButton, IonIcon, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonPage } from "@ionic/react";
import { useState, useRef } from "react";
import BmrControls from "../components/bmi/BmrControls";
import BmrResult from "../components/bmi/BmrResult";
import InputControl from "../components/bmi/InputControl";

const BmrCalculator: React.FC = ({}) => {
  const [calculatedBMR, setCalculatedBMR] = useState<number>();
  const [caloriesNeeded, setCaloriesNeeded] = useState<number | undefined>();
  const [error, setError] = useState<string>();
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [activityLevel, setActivityLevel] = useState<number>(1);
  const [calcUnits, setCalcUnits] = useState<'cmkg' | 'ftlbs'>('cmkg');
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const ageInputRef = useRef<HTMLIonInputElement>(null);
  const genderSelectRef = useRef<HTMLIonSelectElement>(null);

  const calculateBMR = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;
    const enteredAge = ageInputRef.current!.value;
    const age = typeof enteredAge === 'string' ? enteredAge.trim() : '';
    const weight = typeof enteredWeight === 'string' ? enteredWeight.trim() : '';
    const height = typeof enteredHeight === 'string' ? enteredHeight.trim() : '';

    let convertedHeight = +height;
    let convertedWeight = +weight;
    let convertedAge = +age;

    if (calcUnits === 'ftlbs') {
      convertedHeight *= 30.46;
      convertedWeight *= 0.453592;
    }

    if (!enteredWeight || !enteredHeight || +enteredHeight <= 0 || +enteredWeight <= 0 || enteredAge === undefined) {
      setError('Please enter a valid (non-negative) input number');
      return;
    }

    let bmr: number;

    if (gender === 'male') {
      bmr = 66 + 13.7 * convertedWeight + 5 * convertedHeight - 6.8 * convertedAge;
    } else {
      bmr = 655 + 9.6 * convertedWeight + 1.8 * convertedHeight - 4.7 * convertedAge;
    }
    setCalculatedBMR(bmr);
  };

  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    genderSelectRef.current!.value = 'male';
    ageInputRef.current!.value = '';
    setCalculatedBMR(undefined);
  };

  const clearError = () => {
    setError(undefined); // Set error state to undefined to close the alert
  };

  const activityBmr = () => {};

  const selectCalcUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
  };

  const selectGenderHandler = () => {
    const selectedGender = genderSelectRef.current?.value as 'male' | 'female';
    setGender(selectedGender);
  };

  const calculateCalories = (bmr: number, activityLevel: number): void => {
    let calories: number;
    switch (activityLevel) {
      case 1:
        calories = bmr * 1.2;
        break;
      case 2:
        calories = bmr * 1.375;
        break;
      case 3:
        calories = bmr * 1.55;
        break;
      case 4:
        calories = bmr * 1.725;
        break;
      case 5:
        calories = bmr * 1.9;
        break;
      default:
        calories = bmr;
        break;
    }
    setCaloriesNeeded(calories);
  };

  return (
    <IonPage>
      <IonAlert isOpen={!!error} message={error} buttons={[{ text: 'Okay', handler: clearError }]} />
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>BMR CALCULATOR</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen={true}>
          <IonGrid className="ion-padding">
            <IonRow>
              <IonCol>
                <InputControl selectedValue={calcUnits} onSelectValue={selectCalcUnitHandler} />
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel>Gender</IonLabel>
                  <IonSelect value={gender} ref={genderSelectRef} onIonChange={selectGenderHandler} placeholder="Select Gender">
                    <IonSelectOption value="male">Male</IonSelectOption>
                    <IonSelectOption value="female">Female</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Age</IonLabel>
                  <IonInput type="number" ref={ageInputRef} min="0"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
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
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BmrControls onCalculate={() => calculateBMR()} onReset={resetInputs} />
            {calculatedBMR && (
              <IonRow>
                <IonCol className="ion-padding">
                  <BmrResult bmr={calculatedBMR} bmrCategory="status" />
                </IonCol>
              </IonRow>
            )}
          </IonGrid>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default BmrCalculator;
