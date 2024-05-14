import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonButton } from '@ionic/react';
import CardWorkout from '../components/cardWorkout';
import CardSlideChallenge from '../components/CardSlideChallenge';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router';
import { Challenge, Workout } from '../assets/challenges';

interface LatihanPageProps{
  challenges: Challenge[];
  workouts: Workout[];
}

const LatihanPage: React.FC<LatihanPageProps> = (props: LatihanPageProps) => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader color="warning">
        <IonToolbar color="warning">
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
          <IonCard>
            <IonCardHeader>
              <IonRow>
                <IonCol>
                  <IonCardTitle>Target Mingguan</IonCardTitle>
                </IonCol>
                <IonCol class="ion-text-end">
                  <IonCardTitle style={{ color: 'blue' }}>0/7</IonCardTitle>
                </IonCol>
              </IonRow>
            </IonCardHeader>
            <IonCardContent>
              <IonRow>
                {[...Array(7)].map((_, i) => (
                  <IonCol key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                      style={{
                        border: '1px solid black',
                        borderRadius: '50%',
                        padding: '10px',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {i + 1}
                    </div>
                  </IonCol>
                ))}
              </IonRow>
            </IonCardContent>
          </IonCard>
          <IonText style={{ fontWeight: 'bold' }}>TANTANGAN</IonText>
        <Swiper
          slidesPerView={1.5}
          className='ion-padding-vertical'
        >
          {
          props.challenges.map(item => (
              <SwiperSlide
                onClick={
                  () => {
                    history.push(`/timeline/${item.type}`);
                  }
                }
              >
                <CardSlideChallenge
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </SwiperSlide>))
          }
        </Swiper>

          {/* <IonRow>
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
          </IonRow> */}
          <IonText style={{ fontWeight: 'bold', paddingTop: "10px"}}>Body Builder</IonText>
          {
          props.workouts.map(item => (
            <CardWorkout
              durasi={item.durasi}
              imageWO={item.imageWO}
              judul={item.judul}
            />
          ))
          }
          <IonText style={{ fontWeight: 'bold' }}>Daily Workout</IonText>
          <IonCard
            style={{
              backgroundImage:
                "url('https://th.bing.com/th/id/R.1daf0477b0bff1e5cf6c0dd9f7c4cd88?rik=5%2b2Ot8bklAyQgA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0711%2f4830%2f6743%2farticles%2frear-delts.jpg%3fv%3d1674656896&ehk=Q7RUE%2fYZoilJwX6KvFd7CfTzk%2bnBm0IRbOEFGYNkp8U%3d&risl=&pid=ImgRaw&r=0')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <IonCardHeader>
              <IonCardTitle>OTOT PERUT MENENGAH</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>29 MENIT - 21 LATIHAN</IonCardContent>
          </IonCard>
          <IonCard
            style={{
              backgroundImage: "url('https://farmaboom.com/wp-content/uploads/2018/10/The-number-of-approaches-in-the-exercises-bodybuilding_farmaboom.jpg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
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

export default LatihanPage;
