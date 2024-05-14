import { IonRow, IonCol, IonCard, IonCardSubtitle, IonImg, IonCardTitle } from '@ionic/react';

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
    <IonCard 
      color="warning" 
      className="ion-padding" 
      style={{"height": "100%", "borderRadius": 25, "color" : "white"}}      
    >
      
      <IonRow>
        <IonCol size='6'>
          <IonImg style={{height: "100%"}} src={props.image} />
        </IonCol>
        <IonCol size='6'>
          <IonCardTitle>{props.title}</IonCardTitle>
          <IonCardSubtitle>{props.description}</IonCardSubtitle>
        </IonCol>
      </IonRow>
    </IonCard>
  );
}

export default CardSlideChallenge;
