import React from 'react';
import {
  IonApp,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonPage

} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar color="primary">
          <IonTitle size="small">BOOK WIZARD</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
        <IonCard>
          <img src="./assets/icon/0.jpg" alt="bookwiard" />
          <IonCardHeader>
            <IonCardSubtitle>Look at this!</IonCardSubtitle>
            <IonCardTitle>CHILDREN BOOK RECOMMEND</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>Helmet top 10 children books list</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
