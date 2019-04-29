import React, { useState } from 'react';
import { connect } from 'react-redux';
import MeetupDetail from '../MeetupDetail/MeetupDetail';
import MeetupConfirmation from '../MeetupConfirmation/MeetupConfirmation';
import MeetupDescription from '../MeetupDescription/MeetupDescription';
import MeetupLocation from '../MeetupLocation/MeetupLocation';

import { Form } from 'react-final-form';
import { validateMeetupCreateForm } from '../../../utils/finalFormValidate';

const MeetupCreateWizard = (props) => {
  const [step, setStep] = useState(1);

  const onSubmit = (values, formApi) => {
    console.log('Submit form ;D', values, props);

    formApi.reset();
  };

  const setFormStep = (stepValue) => {
    if (step < 1 || step > 4) return;
    setStep(stepValue);

    console.log('step form is =>', step);
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
      <div className="current-step is-pulled-right">{step} of 4</div>
      <Form
        validate={validateMeetupCreateForm}
        initialValues={{ title: 'Cool JS =D', employed: false }}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <form onSubmit={handleSubmit}>
            {renderStep(values)}

            <pre>{JSON.stringify(values, 0, 2)}</pre>

            {step >= 4 ? (
              <button
                disabled={invalid}
                type="submit"
                className="button is-primary"
              >
                Submit
              </button>
            ) : null}
          </form>
        )}
      />
      <progress className="progress" value={step * 25} max="100">
        {step * 25}%
      </progress>
      <div className="controll-btns m-b-md">
        <button
          disabled={step <= 1}
          className="button is-primary m-r-sm"
          onClick={() => setFormStep(step - 1)}
        >
          Back
        </button>
        <button
          disabled={step >= 4}
          className="button is-primary"
          onClick={() => setFormStep(step + 1)}
        >
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
