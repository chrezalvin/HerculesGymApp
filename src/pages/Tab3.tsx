import {
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
import "./Tab3.css";
import { IonIcon } from "@ionic/react";
import { flame, home, medal, timer } from "ionicons/icons";
import { fireEvent } from "@testing-library/dom";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
                  <h2>0</h2>
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
                  <h2>0</h2>
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
                  <h2>0</h2>
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
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
