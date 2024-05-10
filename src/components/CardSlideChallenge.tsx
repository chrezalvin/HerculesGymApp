import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonButton, IonMenu, IonAlert, IonCardSubtitle, IonImg } from '@ionic/react';
import {
  SwiperSlide,
  Swiper
} from 'swiper/react';

import { useHistory } from 'react-router';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./cardSlideChallenge.css";
import { Redirect } from 'react-router';

export const challenge = [
  {
    title: 'Push up',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // image: 'https://th.bing.com/th/id/OIP.3sPtrPslnRIZjhSXvkgEMgHaHt?rs=1&pid=ImgDetMain',
    image: "https://i.ibb.co/8711mv2/image-2024-05-10-215737619-removebg-preview.png"
  },
  {
    title: 'Sit Up',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://www.pngplay.com/wp-content/uploads/1/Men-Exercising-PNG-Image.png',
  },
  {
    title: 'Sit Up',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://www.pngplay.com/wp-content/uploads/1/Men-Exercising-PNG-Image.png',
  },
];

const CardSlideChallenge: React.FC = () => {
  const history = useHistory();

  return (
    <Swiper
      slidesPerView={1.5}
    >
      {
        challenge.map((element) => (
          <SwiperSlide
            onClick={() => {
              history.push("/test");
            }}
          >
            <IonCard className="ion-padding" style={{"height": "100%"}}>
              <IonRow>
                <IonCol>
                  <h1>{element.title}</h1>
                  <IonCardSubtitle>{element.description}</IonCardSubtitle>
                </IonCol>
                <IonCol>
                  <IonImg src={element.image} />
                </IonCol>
              </IonRow>
            </IonCard>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

// const CardSlideChallenge: React.FC = () => {
//   return (
//     <IonGrid style={{ display: 'flex', flexFlow: 'row nowrap', overflow: 'auto', padding: 10 }}>
//       <IonRow>
//         {Challenge.map((work, index) => (
//           <IonCol key={index} size="md-4" size-xs="12">
//             <IonCard className="ion-padding">
//               <IonRow>
//                 <IonCol>
//                   <h1>{work.title}</h1>
//                   <IonCardSubtitle>{work.description}</IonCardSubtitle>
//                 </IonCol>
//                 <IonCol>
//                   <IonImg src={work.image} />
//                 </IonCol>
//               </IonRow>
//             </IonCard>
//           </IonCol>
//         ))}
//       </IonRow>
//     </IonGrid>
//   );
// };

export default CardSlideChallenge;
