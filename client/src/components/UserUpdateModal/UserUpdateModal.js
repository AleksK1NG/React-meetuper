import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../../ducks/authModule/authSelectors';
import UserUpdateModalForm from './UserUpdateModalForm/UserUpdateModalForm';
import { updateUser } from '../../ducks/authModule/authActions';

const UserUpdateModal = ({ user, updateUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (values, formApi) => {
    const newUser = {
      ...user,
      ...values
    };
    updateUser(newUser);
    formApi.reset();
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="button is-primary is-outlined m-t-sm">
        Update Info
      </button>

      {user && <UserUpdateModalForm isOpen={isOpen} setIsOpen={setIsOpen} onSubmit={onSubmit} user={user} />}
    </div>
  );
};

export default connect(
  (state) => ({
    user: userSelector(state)
  }),
  { updateUser }
)(UserUpdateModal);
