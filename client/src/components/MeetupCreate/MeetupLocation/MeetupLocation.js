import React, { useState } from 'react';
import { Field } from 'react-final-form';

const MeetupLocation = ({ location }) => {
  const [changeUserLocation, setChangeUserLocation] = useState(false);

  return (
    <div>
      <h2 className="title m-b-sm">What's your new Meetup location?</h2>
      <a href="foo" className="m-b-lg">
        {location !== '' && (
          <React.Fragment>
            <span className="subtitle">{location}</span>
            <span onClick={() => setChangeUserLocation(!changeUserLocation)}>
              (change location)
            </span>
          </React.Fragment>
        )}
        <hr />
        {(location === '' || changeUserLocation) && (
          <Field
            name="location"
            component="input"
            type="text"
            label="Meetup location"
          >
            {({ input, meta }) => (
              <div>
                <label>Meetup location</label>
                <input
                  className="input"
                  type="text"
                  {...input}
                  placeholder="Meetup location"
                />
                {meta.touched && meta.error && (
                  <span className="help is-danger">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
        )}
      </a>
    </div>
  );
};

export default MeetupLocation;
