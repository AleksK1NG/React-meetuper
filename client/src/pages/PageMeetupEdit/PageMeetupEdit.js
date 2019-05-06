import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './PageMeetupEdit.scss';
import {
  fetchMeetupById,
  loadingMeetupsSelector,
  meetupCreatorSelector,
  meetupSelector
} from '../../ducks/meetups';
import Loader from '../../components/shared/Loader/Loader';
import { Form } from 'react-final-form';
import moment from 'moment';
import { validateMeetupEditForm } from '../../utils/finalFormValidation/validateMeetupEditForm';
import { Redirect } from 'react-router-dom';
import MeetupEditHeroSection from '../../components/MeetupEdit/MeetupEditHeroSection/MeetupEditHeroSection';
import MeetupEditMainSection from '../../components/MeetupEdit/MeetupEditMainSection/MeetupEditMainSection';

const PageMeetupEdit = ({
  meetup,
  loading,
  match,
  fetchMeetupById,
  isMeetupCreator
}) => {
  useEffect(() => {
    fetchMeetupById(match.params.id);
  }, []);

  const onSubmit = (values, formApi) => {
    const startDate = moment(values.startDate).format();

    // updateMeetup({ ...values, startDate });

    console.log('PageMeetupEdit =>', { ...values, startDate });

    formApi.reset();
  };

  if (loading || !meetup) return <Loader />;
  if (!loading && meetup && !isMeetupCreator) return <Redirect to="/" />;

  let submit;

  return (
    <div className="meetup-detail-page">
      <Form
        validate={validateMeetupEditForm}
        initialValues={{
          startDate: moment(meetup.startDate).format('YYYY-MM-DD'),
          title: meetup.title,
          timeFrom: meetup.timeFrom,
          timeTo: meetup.timeTo,
          location: meetup.location,
          shortInfo: meetup.shortInfo,
          description: meetup.description
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid, values }) => {
          console.log('Form values =>', values);
          submit = handleSubmit;
          return (
            <form onSubmit={handleSubmit}>
              <MeetupEditHeroSection
                meetup={meetup}
                submit={submit}
                invalid={invalid}
                pristine={pristine}
              />
              <MeetupEditMainSection />
            </form>
          );
        }}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    isMeetupCreator: meetupCreatorSelector(state),
    meetup: meetupSelector(state),
    loading: loadingMeetupsSelector(state)
  }),
  { fetchMeetupById }
)(PageMeetupEdit);
