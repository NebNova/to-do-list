import React, { useRef, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonList,
  IonAlert,
  IonModal,
} from "@ionic/react";
import ListEntry from "./components/ListEntry";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  const [newItem, setNewItem] = useState<string>();
  const [edit, setEdit] = useState<string>();
  const [error, setError] = useState<string>();
  const entryTextRef = useRef<HTMLIonInputElement>(null);
  const editEntryTextRef = useRef<HTMLIonInputElement>(null);

  const newEntry = () => {
    const newEntryText = entryTextRef.current!.textContent;

    if (!newEntryText) {
      setError("Entry Text cannont be blank!");
      console.log(newEntryText);
      return;
    }
    console.log(newEntryText);
    setNewItem(newEntryText);
  };

  const clearError = () => {
    setError("");
  };

  const deleteEntry = () => {};

  const editEntry = () => {
    setEdit("Enter text here");
  };

  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonModal isOpen={!!edit}>Edit modal</IonModal>
      <IonApp>
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonGrid>
              <IonRow className="ion-text-center">
                <IonTitle>My To Do List</IonTitle>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonInput
                    placeholder="Enter To Do item here"
                    type="text"
                    ref={entryTextRef}
                  ></IonInput>
                </IonCol>
                <IonCol>
                  <IonInput>
                    <IonButton onClick={newEntry} >
                      Add To List
                    </IonButton>
                  </IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonGrid /** new entrys should go in this grid */>
             {newItem && <ListEntry entryText={newItem} onDelete={deleteEntry} onEdit={editEntry} />}
            </IonGrid>
          </IonList>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
