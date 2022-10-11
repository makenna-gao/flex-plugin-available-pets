import React, { useState } from 'react';

import { Alert } from '@twilio-paste/core/alert';
import { Theme } from '@twilio-paste/core/theme';
import { Text } from '@twilio-paste/core/text';

const PetOfDay = () => {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) {
    return null;
  }

  const dismiss = () => setIsOpen(false);

  return (
    <Theme.Provider theme="default">
      <br/>
      <h1 style={{textAlign: "center", fontFamily:"Helvetica", fontSize:"2rem"}}>Recently Adopted Pet Of The Day</h1>
      <br/>
      <br/>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 30 }}>
        <div>
          <h2 style={{textAlign: "center", fontFamily:"Helvetica", fontSize:"1rem"}}>Rusty</h2>
          <li>Breed: Boxer / Mix</li>
          <li>Gender: Male</li>
          <li>Age: 1 year 1 month</li>
          <p>About Me: I love chewing on bones and digging holes! I hope to have a big backyard someday.</p>

        </div>
        <img height="300px" width="300px" src="https://g.petango.com/photos/910/b8cf2201-c7fd-42b0-9032-6ad2f1396f46.jpg" alt="Logo" />
      </div>
    </Theme.Provider>
  );
};

export default PetOfDay;
