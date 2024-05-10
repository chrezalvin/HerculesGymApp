import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
  IonButton,
  ToggleCustomEvent,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import React, { useState, useEffect } from "react";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="judul">Latihan Rumahan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow class="garis">
            <IonCol>
              <IonLabel class="ion-text-center">
                <h2>0</h2>
                <p>LATIHAN</p>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel class="ion-text-center">
                <h2>0</h2>
                <p>KKAL</p>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel class="ion-text-center">
                <h2>0</h2>
                <p>MENIT</p>
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonCard>
            <IonCardHeader>
              <IonRow>
                <IonCol>
                  <IonCardTitle>Target Mingguan</IonCardTitle>
                </IonCol>
                <IonCol class="ion-text-end">
                  <IonCardTitle style={{ color: "blue" }}>0/7</IonCardTitle>
                </IonCol>
              </IonRow>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                {[...Array(7)].map((_, i) => (
                  <IonCol
                    key={i}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <div
                      style={{
                        border: "1px solid black",
                        borderRadius: "50%",
                        padding: "10px",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {i + 1}
                    </div>
                  </IonCol>
                ))}
              </IonRow>
            </IonCardContent>
          </IonCard>
          <IonText style={{ fontWeight: "bold" }}>TANTANGAN</IonText>
          <IonRow>
            <IonCol>
              <IonCard
                style={{
                  backgroundColor: "#3606e5",
                  display: "flex",
                  flexDirection: "column",
                  height: "95%",
                }}
              >
                <IonCardHeader>
                  <IonCardTitle style={{ fontWeight: "bold" }}>
                    SELURUH TUBUH TANTANGAN
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent style={{ flexGrow: 1, color: "white" }}>
                  Mulailah perjalanan membentuk tubuh dengan fokus kepada semua
                  kelompok otot dan bangun tubuh impianmu dalam 4 minggu!
                </IonCardContent>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <IonButton
                    style={{
                      width: "75%",
                      backgroundColor: "white",
                      "--background": "white",
                      color: "blue",
                      "--color": "blue",
                    }}
                  >
                    Klik Mulai
                  </IonButton>
                </div>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard
                style={{
                  backgroundColor: "#0bcdf1",
                  display: "flex",
                  flexDirection: "column",
                  height: "95%",
                }}
              >
                <IonCardHeader>
                  <IonCardTitle style={{ fontWeight: "bold" }}>
                    TUBUH BAGIAN BAWAH
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent style={{ flexGrow: 1, color: "white" }}>
                  Hanya dlam 4 minggu, kuatkan kaki,tingkatkan kekuatan secara
                  keseluruhan!
                </IonCardContent>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <IonButton
                    style={{
                      width: "75%",
                      backgroundColor: "white",
                      "--background": "white",
                      color: "blue",
                      "--color": "blue",
                    }}
                  >
                    Klik Mulai
                  </IonButton>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonText style={{ fontWeight: "bold" }}>PEMULA</IonText>
          <IonCard
            style={{
              backgroundImage:
                "url('https://functionalfittnessdailynews.com/wp-content/uploads/2022/03/Muscular-Fitness-Model-Working-Out-For-Six-Pack-Abs-Doing-Cable-Pull-Outs-Exercise-1024x567.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <IonCardHeader>
              <IonCardTitle>OTOT PERUT PEMULA</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>20 MENIT - 16 LATIHAN</IonCardContent>
          </IonCard>
          <IonCard
            style={{
              backgroundImage:
                "url('https://th.bing.com/th/id/OIP.49Tm_lVNtoG9YGGwpQ_AOwHaEK?w=560&h=315&rs=1&pid=ImgDetMain')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <IonCardHeader>
              <IonCardTitle>DADA PEMULA</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>7 MENIt - 11 LATIHAN</IonCardContent>
          </IonCard>
          <IonText style={{ fontWeight: "bold" }}>PEMULA</IonText>
          <IonCard
            style={{
              backgroundImage:
                "url('https://th.bing.com/th/id/R.1daf0477b0bff1e5cf6c0dd9f7c4cd88?rik=5%2b2Ot8bklAyQgA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0711%2f4830%2f6743%2farticles%2frear-delts.jpg%3fv%3d1674656896&ehk=Q7RUE%2fYZoilJwX6KvFd7CfTzk%2bnBm0IRbOEFGYNkp8U%3d&risl=&pid=ImgRaw&r=0')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <IonCardHeader>
              <IonCardTitle>OTOT PERUT MENENGAH</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>29 MENIT - 21 LATIHAN</IonCardContent>
          </IonCard>
          <IonCard
            style={{
              backgroundImage:
                "url('https://farmaboom.com/wp-content/uploads/2018/10/The-number-of-approaches-in-the-exercises-bodybuilding_farmaboom.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <IonCardHeader>
              <IonCardTitle>DADA MENENGAH</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>15 MENIt - 14 LATIHAN</IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
