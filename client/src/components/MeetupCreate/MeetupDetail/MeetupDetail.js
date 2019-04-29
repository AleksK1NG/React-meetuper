// import React from 'react';
// import './MeetupDetail.scss';
//
// const MeetupDetail = () => {
//   return (
//     <form>
//       <div className="field">
//         <label className="title m-b-sm">Choose Title</label>
//         <input className="input" type="text" placeholder="Enter Title" />
//         <div>
//           <span className="help is-danger">Title is required</span>
//         </div>
//       </div>
//
//       <div className="field">
//         <label className="title m-b-sm">Starts At</label>
//         <input className="input" type="text" placeholder="Starts At" />
//         <div>
//           <span className="help is-danger">Starts at is required</span>
//         </div>
//       </div>
//       <div className="field">
//         <label className="title m-b-sm">From</label>
//         <input className="input" type="text" placeholder="Time From" />
//       </div>
//       <div className="field">
//         <label className="title m-b-sm">To</label>
//         <input className="input" type="text" placeholder="Time to" />
//       </div>
//       <div className="field">
//         <label className="title m-b-sm">Please Choose the Category.</label>
//         <div className="m-b-lg">
//           <div className="select">
//             <select>
//               <option value="category">Category name</option>
//             </select>
//           </div>
//           <div>
//             <span className="help is-danger">Category is required</span>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };
//
// export default MeetupDetail;

import React from 'react';
import './MeetupDetail.scss';
import { Field } from 'react-final-form';

const MeetupDetail = () => {
  return (
    <div>
      <Field name="title" component="input" type="text" label="Title">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">Choose Title</label>
            <input
              className="input is-large"
              type="text"
              {...input}
              placeholder="Enter Title"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="startsAt" component="input" type="text" label="Starts At">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">Starts At</label>
            <input
              className="input is-large"
              type="text"
              {...input}
              placeholder="Starts At"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="timeFrom" component="input" type="text" label="Time From">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">From</label>
            <input
              className="input is-large"
              type="text"
              {...input}
              placeholder="Time From"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="timeTo" component="input" type="text" label="Time To">
        {({ input, meta }) => (
          <div className="field">
            <label className="title m-b-sm">To</label>
            <input
              className="input is-large"
              type="text"
              {...input}
              placeholder="Time To"
            />
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>

      <Field name="category" component="select" type="text" label="Categories">
        {({ input, meta }) => (
          <div className="select">
            <select {...input}>
              <option value="category">Category name</option>
              <option value="chicken">🐓 Chicken</option>
              <option value="ham">🐷 Ham</option>
              <option value="mushrooms">🍄 Mushrooms</option>
              <option value="cheese">🧀 Cheese</option>
              <option value="tuna">🐟 Tuna</option>
              <option value="pineapple">🍍 Pineapple</option>
            </select>
            {meta.touched && meta.error && (
              <span className="help is-danger">{meta.error}</span>
            )}
          </div>
        )}
      </Field>
    </div>
  );
};

export default MeetupDetail;
