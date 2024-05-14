import { IonRow, IonText, IonCol, IonCard, IonCardSubtitle, IonImg, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/react';

import "./cardSlideChallenge.css";

interface CardWorkoutProps {
  judul: string;
  durasi: string;
  imageWO: string;
}

const CardWorkout: React.FC<CardWorkoutProps> = (props: CardWorkoutProps) => {
  return (
    <>
      <IonCard color="warning" onClick={() => {
        console.log('click');
      }}
      >
        <IonCardHeader style={{}}>
          <IonCardTitle>{props.judul}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>{props.durasi}</p>
        </IonCardContent>
        <IonImg src={props.imageWO} style={{
          backgroundImage: props.imageWO,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer',
          height: '100%',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}>
        {/* <IonCardHeader>
          <IonText style={{ fontWeight: 'bold', position: 'absolute', top: '36%', fontSize: "2.0em", color: "#fff"}}>{props.judul}</IonText>
          <IonCardTitle>{props.durasi}</IonCardTitle>
        </IonCardHeader> */}
        </IonImg>
      </IonCard>
    </>
  );
}

export default CardWorkout;
