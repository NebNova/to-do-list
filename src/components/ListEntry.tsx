import React from "react";
import { IonCheckbox, IonCol, IonIcon, IonItem, IonRow, } from "@ionic/react";
import { pencilOutline, trashOutline } from "ionicons/icons";

const ListEntry: React.FC<{
  entryText: string;
  onEdit: () => void;
  onDelete: () => void;
}> = (props) => {
return (
    <IonRow>
      <IonCol>
        <IonCheckbox></IonCheckbox>
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