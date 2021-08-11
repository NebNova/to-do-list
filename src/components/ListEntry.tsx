import React from "react";
import { IonCol, IonIcon, IonItem, IonRadio, IonRow, } from "@ionic/react";
import { pencilOutline, trashOutline } from "ionicons/icons";
import App from "../App";

const ListEntry: React.FC<{
  onEdit: () => void;
  onDelete: () => void;
}> = (props) => {
return (
    <IonRow>
      <IonCol>
        <IonRadio></IonRadio>
      </IonCol>
      <IonCol>
        <IonItem> </IonItem>
      </IonCol>
      <IonCol>
        <IonItem>
          <IonIcon onClick={props.onEdit} icon={pencilOutline}></IonIcon>
        </IonItem>
      </IonCol>
      <IonCol>
        <IonItem>
        <IonIcon onClick={props.onDelete} icon={trashOutline}></IonIcon>
        </IonItem>
      </IonCol>
    </IonRow>
  );
};

export default ListEntry;