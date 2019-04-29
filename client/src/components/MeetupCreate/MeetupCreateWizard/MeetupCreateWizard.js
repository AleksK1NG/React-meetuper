import React, { useState } from 'react';
import { connect } from 'react-redux';
import MeetupDetail from '../MeetupDetail/MeetupDetail';
import MeetupConfirmation from '../MeetupConfirmation/MeetupConfirmation';
import MeetupDescription from '../MeetupDescription/MeetupDescription';
import MeetupLocation from '../MeetupLocation/MeetupLocation';

import { Form } from 'react-final-form';
import {
  validateLogin,
  validateMeetupCreateForm
} from '../../../utils/finalFormValidate';

const MeetupCreateWizard = (props) => {
  const [step, setStep] = useState(1);

  const onSubmit = (values, formApi) => {
    console.log('Submit form ;D', values, props);

    formApi.reset();
  };

  const renderStep = (values) => {
    switch (step) {
      case 1:
        return <MeetupLocation />;
      case 2:
        return <MeetupDetail />;
      case 3:
        return <MeetupDescription />;
      case 4:
        return <MeetupConfirmation values={values} />;

      default:
        return null;
    }
  };

  return (
    <div className="meetup-create-form">
      <div className="current-step is-pulled-right">1 of 4</div>
      Form Steps
      {/*{renderStep()}*/}
      <Form
        validate={validateMeetupCreateForm}
        initialValues={{ title: 'Cool JS =D', employed: false }}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <form onSubmit={handleSubmit}>
            {renderStep(values)}

            <pre>{JSON.stringify(values, 0, 2)}</pre>

            <button
              type="submit"
              className="button is-block is-info is-large is-fullwidth"
            >
              Login
            </button>
          </form>
        )}
      />
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

export default connect(
  (state) => ({}),
  {}
)(MeetupCreateWizard);
