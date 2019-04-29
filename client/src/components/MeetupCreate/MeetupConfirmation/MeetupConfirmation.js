// import React from 'react';
// import './MeetupConfirmation.scss';
//
// const MeetupConfirmation = () => {
//   return (
//     <div>
//       <h1 className="title m-b-sm">Please confirm entered data</h1>
//
//       <div className="content">
//         <div>
//           <span className="result-title">Location</span>
//           <p>Some Location</p>
//         </div>
//         <div>
//           <span className="result-title">Title</span>
//           <p>Some Title</p>
//         </div>
//         <div>
//           <span className="result-title">Start Date</span>
//           <p>Some Start Date</p>
//         </div>
//         <div>
//           <span className="result-title">From</span>
//           <p>Some Time From</p>
//         </div>
//         <div>
//           <span className="result-title">To</span>
//           <p>Some Time To</p>
//         </div>
//         <div>
//           <span className="result-title">Category</span>
//           <p>Some Category</p>
//         </div>
//         <div>
//           <span className="result-title">Image</span>
//           <p>Some Event</p>
//         </div>
//         <div>
//           <span className="result-title">Short Info</span>
//           <p>Some Info</p>
//         </div>
//         <div>
//           <span className="result-title">Description</span>
//           <p>Some Description</p>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default MeetupConfirmation;

import React from 'react';
import './MeetupConfirmation.scss';

const MeetupConfirmation = ({ values }) => {
  return (
    <div>
      <h1 className="title m-b-sm">Please confirm entered data</h1>

      <div className="content">
        <div>
          <span className="result-title">Location</span>
          <p>{values.location}</p>
        </div>
        <div>
          <span className="result-title">Title</span>
          <p>{values.title}</p>
        </div>
        <div>
          <span className="result-title">Start Date</span>
          <p>{values.startsAt}</p>
        </div>
        <div>
          <span className="result-title">From</span>
          <p>{values.timeFrom}</p>
        </div>
        <div>
          <span className="result-title">To</span>
          <p>{values.timeTo}</p>
        </div>
        <div>
          <span className="result-title">Category</span>
          <p>{values.category}</p>
        </div>
        <div>
          <span className="result-title">Image</span>
          <p>{values.imageUrl}</p>
        </div>
        <div>
          <span className="result-title">Short Info</span>
          <p>{values.info}</p>
        </div>
        <div>
          <span className="result-title">Description</span>
          <p>{values.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MeetupConfirmation;
