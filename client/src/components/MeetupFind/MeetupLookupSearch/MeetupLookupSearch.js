import React from 'react';
import { Field, Form } from 'react-final-form';
import { validateUserUpdateModalForm } from '../../../utils/finalFormValidation/validateUserUpdateModalForm';

const MeetupLookupSearch = ({
  location,
  userLocation,
  setUserLocation,
  fetchAllMeetups
}) => {
  const fetchMeetups = (e) => {
    setUserLocation(e.target.value);

    const filter = {};
    if (userLocation) {
      filter['location'] = userLocation
        .toLowerCase()
        .replace(/[\s,]+/g, '')
        .trim();
    }
    console.log('Meetup Lookup Search form =>', filter);
    fetchAllMeetups({ filter: filter });
  };

  const onSubmit = (values, formApi) => {
    formApi.reset();
  };
  return (
    <div className="meetup-lookup-wrap">
      <Form
        initialValues={{
          location: location
        }}
        validate={validateUserUpdateModalForm}
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div className="meetup-lookup centered">
              <div className="level">
                <div className="level-left">
                  {/*      <Field name="location" component="input" type="text" label="Meetpus">*/}
                  {/*        {({ input, meta }) => (*/}
                  {/*          <div className="level-item">*/}
                  {/*            /!*<label className="title">Name</label>*!/*/}
                  {/*            <input*/}
                  {/*              type="text"*/}
                  {/*              {...input}*/}
                  {/*              className="input"*/}
                  {/*              placeholder="Location"*/}
                  {/*            />*/}
                  {/*            {meta.touched && meta.error && (*/}
                  {/*              <span className="help is-danger">{meta.error}</span>*/}
                  {/*            )}*/}
                  {/*          </div>*/}
                  {/*        )}*/}
                  {/*      </Field>*/}

                  {/*<button type="submit"  className="button is-medium m-r-sm">Search</button>*/}

                  <div className="level-item">
                    <input
                      type="text"
                      className="input"
                      placeholder="New York"
                      value={userLocation}
                      onChange={(e) => fetchMeetups(e)}
                    />
                  </div>
                  <div className="level-item">
                    <span>Meetups {location !== '' && `in ${location}`}</span>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <button type="submit" className="button is-medium m-r-sm">
                      Meetups
                    </button>
                    <button className="button is-medium">Calendar</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
};

export default MeetupLookupSearch;
