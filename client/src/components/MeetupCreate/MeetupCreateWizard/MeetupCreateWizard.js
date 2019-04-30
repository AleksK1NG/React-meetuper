import React, { useState, Suspense } from 'react';
import { connect } from 'react-redux';

import { Form } from 'react-final-form';

import moment from 'moment';
import Loader from '../../shared/Loader/Loader';
import { validateMeetupCreateForm } from '../../../utils/finalFormValidation/validateMeetupCreateForm';
import { createMeetup } from '../../../ducks/meetups';
import './MeetupCreateWizard.scss';
import { allCategoriesSelector } from '../../../ducks/categories';

const MeetupDetail = React.lazy(() => import('../MeetupDetail/MeetupDetail'));
const MeetupConfirmation = React.lazy(() =>
  import('../MeetupConfirmation/MeetupConfirmation')
);
const MeetupDescription = React.lazy(() =>
  import('../MeetupDescription/MeetupDescription')
);
const MeetupLocation = React.lazy(() =>
  import('../MeetupLocation/MeetupLocation')
);

const MeetupCreateWizard = ({ createMeetup, categories }) => {
  const [step, setStep] = useState(1);

  const onSubmit = (values, formApi) => {
    console.log('Submit form ;D', values);
    const startDate = moment(values.startDate).format();

    console.log('ready form => ', { ...values, startDate });
    createMeetup({ ...values, startDate });
    formApi.reset();
  };

  const setFormStep = (stepValue) => {
    if (step < 1 || step > 4) return;
    setStep(stepValue);

    console.log('step form is =>', step);
  };

  const renderStep = (values) => {
    let renderComponent;

    switch (step) {
      case 1:
        return (renderComponent = <MeetupLocation />);
      case 2:
        return (renderComponent = (
          <MeetupDetail values={values} categories={categories} />
        ));
      case 3:
        return (renderComponent = <MeetupDescription />);
      case 4:
        return (renderComponent = <MeetupConfirmation values={values} />);

      default:
        return (renderComponent = null);
    }
  };

  return (
    <div className="meetup-create-form">
      <div className="current-step is-pulled-right">{step} of 4</div>
      <Form
        validate={validateMeetupCreateForm}
        initialValues={{
          startDate: moment(Date.now()).format('YYYY-MM-DD')
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <form onSubmit={handleSubmit}>
            <Suspense fallback={<Loader />}>
              <React.Fragment>{renderStep(values)}</React.Fragment>
            </Suspense>

            {step >= 4 ? (
              <button
                style={{ marginTop: '25px' }}
                disabled={invalid}
                type="submit"
                className="button is-primary"
              >
                Submit
              </button>
            ) : null}

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />

      <progress
        className="progress"
        value={step * 25}
        max="100"
        style={{ marginTop: '25px' }}
      >
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
  (state) => ({
    categories: allCategoriesSelector(state)
  }),
  { createMeetup }
)(MeetupCreateWizard);
