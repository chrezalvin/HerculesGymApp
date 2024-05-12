import { IonRow, IonCol, IonCard, IonCardSubtitle, IonImg } from '@ionic/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./cardSlideChallenge.css";

interface CardSlideChallengeProps {
  title: string;
  description: string;
  image: string;
}

const CardSlideChallenge: React.FC<CardSlideChallengeProps> = (props: CardSlideChallengeProps) => {
  return (
    <IonCard className="ion-padding" style={{"height": "100%", "borderRadius": 50, "color" : "white"}}>
      <IonRow>
        <IonCol>
          <h1>{props.title}</h1>
          <IonCardSubtitle>{props.description}</IonCardSubtitle>
        </IonCol>
        <IonCol size='10'>
          <IonImg style={{height: "100%"}} src={props.image} />
        </IonCol>
      </IonRow>
    </IonCard>
  );
}

export default CardSlideChallenge;
