import React from 'react';
import './PageMeetupCreate.scss';
import AppHero from '../../components/Layout/AppHero/AppHero';
import MeetupCreateWizard from '../../components/MeetupCreate/MeetupCreateWizard/MeetupCreateWizard';

const PageMeetupCreate = () => {
  return (
    <div className="meetup-create-page">
      <AppHero />
      <section className="section">
        <div className="container">
          <MeetupCreateWizard />
        </div>
      </section>
    </div>
  );
};

export default PageMeetupCreate;
