import React from 'react';
import './PageMeetupCreate.scss';
import AppHero from '../../components/Layout/AppHero/AppHero';
import MeetupCreateWizard from '../../components/MeetupCreate/MeetupCreateWizard/MeetupCreateWizard';

const PageMeetupCreate = () => {
  return (
    <div className="meetup-create-page">
      <AppHero />
      <div className="container">
        <MeetupCreateWizard />
      </div>
      <h2>Page Meetup Create</h2>
    </div>
  );
};

export default PageMeetupCreate;
