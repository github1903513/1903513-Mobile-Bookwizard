//import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonList,
  IonLoading,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg
}
  from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import firebase from '../Firebase';
import React, { useState, useEffect } from 'react';

const Tab2: React.FC = (props) => {


  const [data, setData] = useState<any[]>([])
  const [showLoading, setShowLoading] = useState(true);

  // load Firebase collection

  var dbref = firebase.database().ref().orderByChild('time');

  useEffect(() => {
    loadData()
  }, [])


  const loadData = () => {
    // Extract Firebase collection to array
    dbref.on('value', resp => {

      let cases = snapshotToArray(resp)
      let bycountry: any[] = []
      cases.reduce((res, value) => {
        if (!res[value.bookname]) {
          res[value.bookname] = { bookname: value.bookname, time: " ", bookauthor: " ", image: " ", bookcontent: " " };
          bycountry.push(res[value.bookname])
        }
        res[value.bookname].time = value.time;
        res[value.bookname].bookauthor = value.bookauthor;
        res[value.bookname].image = value.image;
        res[value.bookname].bookcontent = value.bookcontent;
        return res;
      }, {});
      setData(bycountry)
      setShowLoading(false);
    });
  };

  const snapshotToArray = (snapshot: any) => {
    const returnArr: any[] = []

    snapshot.forEach((childSnapshot: any) => {
      const item = childSnapshot.val()
      item.key = childSnapshot.key
      returnArr.push(item)
    });

    return returnArr;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Helmet children books Top 10</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading...'}
        />
        <IonList>
          {data.map((item, idx) => (
            <IonItem key={idx}>
              <IonImg src={item.image} />
              <IonLabel>
                <h2>{item.bookname}</h2>
                <h3>time: {item.time}</h3>
                <h3>author: {item.author}</h3>
                <h3>image: {item.image}</h3>
                <h3>content: {item.content}</h3>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );



};

export default Tab2;
