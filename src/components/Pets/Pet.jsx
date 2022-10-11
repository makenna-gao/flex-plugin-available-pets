import React, { useState } from 'react';
import styles from "./Pet.module.css";

import { Alert } from '@twilio-paste/core/alert';
import { Theme } from '@twilio-paste/core/theme';
import { Text } from '@twilio-paste/core/text';

const Pet = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  //const [available, setAvailable] = useState(props.available);

  const buttonReserveHandler = (props) => {
    //props.available = false;
    //setAvailable(false);
  };

  const dismiss = () => setIsOpen(false);

  return (
    <Theme.Provider theme="default">
      <div className={props.available ? styles.pet : styles.petOverlay}>
        
        <h3>
          {props.name} - #{props.id}
        </h3>
        <p>
          {props.age < 1 ? props.age * 12 + " months" : props.age + " years"}
        </p>
        {/* {!available && <div className={styles.petOverlayText}>Reserved</div>} */}
        {props.available ? <button onClick={buttonReserveHandler}>Reserve Pet</button> : <button onClick={buttonReserveHandler} disabled>Reserve Pet</button>}
        <button onClick={buttonReserveHandler}>Send bio</button>
    </div>
    </Theme.Provider>
  );
};

export default Pet;
