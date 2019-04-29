import React, { useState } from 'react';
import MeetupDetail from '../MeetupDetail/MeetupDetail';
import MeetupConfirmation from '../MeetupConfirmation/MeetupConfirmation';
import MeetupDescription from '../MeetupDescription/MeetupDescription';
import MeetupLocation from '../MeetupLocation/MeetupLocation';

const MeetupCreateWizard = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <MeetupLocation />;
      case 2:
        return <MeetupDetail />;
      case 3:
        return <MeetupDescription />;
      case 4:
        return <MeetupConfirmation />;

      default:
        return null;
    }
  };

  return (
    <div className="meetup-create-form">
      <div className="current-step is-pulled-right">1 of 4</div>
      Form Steps
      {renderStep()}
      <progress className="progress" value={step * 25} max="100">
        {step * 25}%
      </progress>
      <div className="controll-btns m-b-md">
        <button
          className="button is-primary m-r-sm"
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
        <button className="button is-primary" onClick={() => setStep(step + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MeetupCreateWizard;
