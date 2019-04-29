// import React from 'react';
//
// const MeetupLocation = () => {
//   return (
//     <div>
//       <h1 className="title m-b-sm">What's your new Meetup location?</h1>
//       <div className="m-b-lg">
//         <span className="subtitle">New York, US</span>
//         <a>(change location)</a>
//         <input type="text" className="input" />
//         <div>
//           <span className="help is-danger">Location is required</span>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default MeetupLocation;

import React from 'react';
import { Field } from 'react-final-form';

const MeetupLocation = () => {
  return (
    <div>
      <h1 className="title m-b-sm">What's your new Meetup location?</h1>
      <div className="m-b-lg">
        <span className="subtitle">New York, US</span>
        <a>(change location)</a>
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
                className="input is-large"
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
      </div>
    </div>
  );
};

export default MeetupLocation;
