import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './PageMeetupEdit.scss';
import {
  loadingMeetupsSelector,
  meetupCreatorSelector,
  meetupSelector
} from '../../ducks/meetupsModule/meetupsSelectors';
import Loader from '../../components/shared/Loader/Loader';
import { Form } from 'react-final-form';
import moment from 'moment';
import { validateMeetupEditForm } from '../../utils/finalFormValidation/validateMeetupEditForm';
import { Redirect } from 'react-router-dom';
import MeetupEditHeroSection from '../../components/MeetupEdit/MeetupEditHeroSection/MeetupEditHeroSection';
import MeetupEditMainSection from '../../components/MeetupEdit/MeetupEditMainSection/MeetupEditMainSection';
import { allCategoriesSelector } from '../../ducks/categoriesModule/categoriesSelectors';
import { fetchMeetupById, updateMeetup } from '../../ducks/meetupsModule/meetupsActions';
import { fetchAllCategories } from '../../ducks/categoriesModule/categoriesActions';

const PageMeetupEdit = ({
  fetchAllCategories,
  categories,
  updateMeetup,
  meetup,
  loading,
  match,
  fetchMeetupById,
  isMeetupCreator
}) => {
  useEffect(() => {
    fetchMeetupById(match.params.id);
    fetchAllCategories();
  }, []);

  const onSubmit = (values, formApi) => {
    const startDate = moment(values.startDate).format();
    updateMeetup({ ...meetup, ...values, startDate });
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
          description: meetup.description,
          category: meetup.category._id
        }}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid, values }) => {
          submit = handleSubmit;
          return (
            <form onSubmit={handleSubmit}>
              <MeetupEditHeroSection meetup={meetup} submit={submit} invalid={invalid} pristine={pristine} />
              <MeetupEditMainSection categories={categories} meetup={meetup} />
            </form>
          );
        }}
      />
    </div>
  );
};

export default connect(
  (state) => ({
    categories: allCategoriesSelector(state),
    isMeetupCreator: meetupCreatorSelector(state),
    meetup: meetupSelector(state),
    loading: loadingMeetupsSelector(state)
  }),
  { fetchMeetupById, updateMeetup, fetchAllCategories }
)(PageMeetupEdit);
