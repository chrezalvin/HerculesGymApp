import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const ForumPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader color="warning">
        <IonToolbar color="warning">
          <IonTitle>Temukan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard
          style={{
            backgroundImage:
              "url('https://theadultman.com/wp-content/uploads/2021/04/Man-running-768x512.jpg')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "200px",
          }}
        >
          <IonCardHeader style={{ position: "absolute", bottom: 20, left: 0 }}>
            <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
              Tabata 4 MENIT
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent
            style={{ position: "absolute", bottom: 0, left: 0, color: "white" }}
          >
            Latihan paling efektif untuk membakar lemak. Latihan berintensi..
          </IonCardContent>
        </IonCard>
        <p style={{ fontWeight: "bold" }}>Pilihan untuk Anda</p>
        <IonGrid>
          {[...Array(2)].map((_, i) => (
            <IonRow key={i}>
              {[...Array(2)].map((_, j) => (
                <IonCol key={j}>
                  <IonCard>
                    <IonRow>
                      <IonCol size="6">
                        <img
                          src="https://graine-de-yogi.fr/wp-content/uploads/yoga-zen-cours-980x813.png"
                          alt="Deskripsi Gambar"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </IonCol>
                      <IonCol size="6">
                        <IonCardHeader>
                          <IonCardTitle>Hit Pembakar Perut</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>14 MENIT - Pemula</IonCardContent>
                      </IonCol>
                    </IonRow>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          ))}
        </IonGrid>
        <IonCard
          style={{
            backgroundImage:
              "url('https://diyactive.com/wp-content/uploads/2020/09/Why-Hundreds-of-Pro-Athletes-are-Using-Hydrogen-Water.jpg')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "200px",
          }}
        >
          <IonCardHeader style={{ position: "absolute", bottom: 100, left: 0 }}>
            <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
              Menjadi Aktif, Jaga Kebugaran
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent
            style={{
              position: "absolute",
              bottom: 70,
              left: 0,
              color: "white",
            }}
          >
            5 Latihan
          </IonCardContent>
        </IonCard>
        <p style={{ fontWeight: "bold" }}>Untuk Pemula</p>
        <IonRow>
          <IonCol>
            <IonCard
              style={{
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "200px",
                backgroundColor: "blue",
              }}
            >
              <IonCardHeader
                style={{ position: "absolute", bottom: 20, left: 0 }}
              >
                <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
                  Latihan lengan
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "white",
                }}
              >
                Tanpa push up
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard
              style={{
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "200px",
                backgroundColor: "blue",
              }}
            >
              <IonCardHeader
                style={{ position: "absolute", bottom: 20, left: 0 }}
              >
                <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
                  HANYA 4
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "white",
                }}
              >
                gerakan untuk ...
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol>
            <IonCard
              style={{
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "200px",
                backgroundColor: "blue",
              }}
            >
              <IonCardHeader
                style={{ position: "absolute", bottom: 20, left: 0 }}
              >
                <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
                  Latihan
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "white",
                }}
              >
                kaki TANPA M...
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <p style={{ fontWeight: "bold" }}>Latihan cepat</p>
        <IonGrid>
          {[...Array(2)].map((_, i) => (
            <IonRow key={i}>
              {[...Array(2)].map((_, j) => (
                <IonCol key={j}>
                  <IonCard>
                    <IonRow>
                      <IonCol size="6">
                        <img
                          src="https://th.bing.com/th/id/R.b6cc25830ee22f8b08607e18a3f4a79e?rik=TFfBq%2bhJgqUP7Q&riu=http%3a%2f%2fwww.l-men.com%2fwp-content%2fuploads%2f2015%2f05%2f05.-manfaat-lari-manfaat-lari-pagi.jpg&ehk=gZgsZGwDZW8Tj4NrhYkI1JctiV0Ht9tqReExNgGfPQ4%3d&risl=&pid=ImgRaw&r=0"
                          alt="Deskripsi Gambar"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </IonCol>
                      <IonCol size="6">
                        <IonCardHeader>
                          <IonCardTitle>Tabata 4 MENIT</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>4 MENIT - Menengah</IonCardContent>
                      </IonCol>
                    </IonRow>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          ))}
          <p style={{ fontWeight: "bold" }}>Tantangan</p>
          <IonRow>
            <IonCol>
              <IonCard
                style={{
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "200px",
                  backgroundColor: "orange",
                }}
              >
                <IonCardHeader
                  style={{ position: "absolute", bottom: 20, left: 0 }}
                >
                  <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
                    Tantangan
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    color: "white",
                  }}
                >
                  papan
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard
                style={{
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "200px",
                  backgroundColor: "orange",
                }}
              >
                <IonCardHeader
                  style={{ position: "absolute", bottom: 20, left: 0 }}
                >
                  <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
                    Latihan dada
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    color: "white",
                  }}
                >
                  fantastis
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard
                style={{
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "200px",
                  backgroundColor: "orange",
                }}
              >
                <IonCardHeader
                  style={{ position: "absolute", bottom: 20, left: 0 }}
                >
                  <IonCardTitle style={{ fontWeight: "bold", color: "white" }}>
                    HIIT otot inti
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    color: "white",
                  }}
                >
                  fantastis
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <p style={{ fontWeight: "bold" }}>Dengan peralatan</p>
          <IonCard
            style={{
              backgroundImage:
                "url('https://diyactive.com/wp-content/uploads/2020/09/Why-Hundreds-of-Pro-Athletes-are-Using-Hydrogen-Water.jpg')",
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "200px",
            }}
          >
            <IonCardHeader
              style={{ position: "absolute", bottom: 100, left: 0 }}
            >
              <IonCardTitle
                style={{ fontWeight: "bold", color: "white" }}
              ></IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ForumPage;
