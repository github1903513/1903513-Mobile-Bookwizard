import firebase from '../Firebase';
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton,
  IonLoading,
  IonList,
  IonAlert
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = (props) => {

  const [showLoading, setShowLoading] = useState(false);
  const timelist = ['1.4.-30.6.2020', '1.1.-31.3.2020', '1.10.-31.12.2019', '1.7.-30.9.2019', '1.4.-30.6.2019', '1.1.-31.3.2019']
  const [bookname, setBookname] = useState<string>('')
  const [ISBN, setISBN] = useState<string>('')
  const [time, setTime] = useState<string>('')
  const [bookauthor, setBookauthor] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [bookcontent, setBookcontent] = useState<string>('')
  const [showAlert, setShowAlert] = useState(false);
  const dbref = firebase.database().ref()

  const addCases = () => {

    dbref.orderByChild('time').equalTo(time).once('value', resp => {
      let cdata = snapshotToArray(resp)
      let checkCtr = cdata.filter(d => d.bookname === bookname)
      if (checkCtr.length > 0) {
        setShowAlert(true)
        return
      } else {
        let casesdata = { time: time, bookname: bookname, bookauthor: bookauthor, image: image, bookcontent: bookcontent }
        dbref.push(casesdata, (error) => {
          if (error) {
            console.log("Book could not be saved." + error);
          } else {
            setBookname('')
            setBookauthor('')
            setImage('')
            setBookcontent('')
            let prop: any = props;
            prop.history.push({
              pathname: '/'
            })
          }
        })

      }
    })
  }

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
          <IonTitle>Add books</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading...'}
        />
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Invalid'}
          message={'Book is already exists!'}
          buttons={['OK']}
        />
        <IonList>
          <IonItem>
            <IonLabel>Time</IonLabel>
            <IonSelect value={time} onIonChange={e => setTime(e.detail.value)}>
              {timelist.map((ctr, idx) => (
                <IonSelectOption key={idx} value={ctr}>{ctr}</IonSelectOption>
              ))}
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>Bookname</IonLabel>
            <IonInput value={bookname} onIonChange={e => setBookname(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Bookauthor</IonLabel>
            <IonInput value={bookauthor} onIonChange={e => setBookauthor(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Image</IonLabel>
            <IonInput value={image} onIonChange={e => setImage(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Bookcontent</IonLabel>
            <IonInput value={bookcontent} onIonChange={e => setBookcontent(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonButton expand="block" fill="solid" color="secondary" onClick={() => { addCases() }}>Save</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );

};

export default Tab3;
