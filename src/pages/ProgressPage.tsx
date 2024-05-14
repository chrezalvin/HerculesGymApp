import {
  IonButton,
  IonAccordion,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { IonIcon } from "@ionic/react";
import { flame, home, medal, timer } from "ionicons/icons";
import { fireEvent } from "@testing-library/dom";
import { useState } from "react";

interface ProgressPageProps{
  totalWorkout: number;
  totalCalories: number;
  totalTimeSecond: number;
}

const ProgressPage: React.FC<ProgressPageProps> = (props: ProgressPageProps) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle>Laporkan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense"></IonHeader>
        <IonGrid>
          <IonRow class="garis">
            <IonCol>
              <IonLabel class="ion-text-center">
                <div>
                  <IonIcon
                    icon={medal}
                    style={{ fontSize: "50px", color: "blue" }}
                  />
                  <h2>
                    {props.totalWorkout}
                  </h2>
                </div>
                <p>LATIHAN</p>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel class="ion-text-center">
                <div>
                  <IonIcon
                    icon={flame}
                    style={{ fontSize: "50px", color: "blue" }}
                  />
                  <h2>
                    {props.totalCalories / 1000}
                  </h2>
                </div>
                <p>KKAL</p>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel class="ion-text-center">
                <div>
                  <IonIcon
                    icon={timer}
                    style={{ fontSize: "50px", color: "blue" }}
                  />
                  <h2>
                    {props.totalTimeSecond / 60}
                  </h2>
                </div>
                <p>MENIT</p>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>0 hari beruntun</IonCol>
            <IonCol style={{ textAlign: "right" }}>
              Terbaik personal: 0 hari
            </IonCol>
          </IonRow>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold" }}>RIWAYAT</p>
            <p style={{ color: "blue" }}>Semua catatan</p>
          </div>
          <IonCard>
            <IonCardHeader>
              <IonRow>
                <IonCol>
                  Minggu
                  <br />1
                </IonCol>
                <IonCol>
                  Senin
                  <br />2
                </IonCol>
                <IonCol>
                  Selasa
                  <br />3
                </IonCol>
                <IonCol>
                  Rabu
                  <br />4
                </IonCol>
                <IonCol>
                  Kamis
                  <br />5
                </IonCol>
                <IonCol>
                  Jumat
                  <br />6
                </IonCol>
                <IonCol>
                  Sabtu
                  <br />7
                </IonCol>
              </IonRow>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol>0 hari beruntun</IonCol>
                <IonCol style={{ textAlign: "right" }}>
                  Terbaik personal: 0 hari
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontWeight: "bold" }}>BMI</p>
            <p style={{ shapeMargin: "50px", color: "blue" }}>TAMBAH</p>
          </div>
          <IonCard>
            <IonCardHeader>23.1</IonCardHeader>
            <IonCardContent>
              <IonRow>
                <IonCol>tinggi</IonCol>
                <IonCol style={{ textAlign: "right" }}>174cm</IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonGrid>
        <IonContent>
          <IonText>Kalkulator</IonText>
        <IonButton color="warning" expand="block" routerLink="/bmiCalculator">
          Bmi Calculator
        </IonButton>
        <IonButton color="warning" expand="block" routerLink="/bmrCalculator">
          Bmr Calculator
        </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default ProgressPage;
