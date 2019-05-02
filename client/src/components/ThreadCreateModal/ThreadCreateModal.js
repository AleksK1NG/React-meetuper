import React, { useState } from 'react';

const ThreadCreateModal = ({ btnTitle, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="button is-success"
      >
        {btnTitle}
      </button>

      <div className={isOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button
              onClick={() => setIsOpen(false)}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <form>
              <div className="field">
                <label className="title">What would you like to ask?</label>
                <textarea
                  className="textarea"
                  placeholder="Just write something that interest you (:"
                  rows="10"
                />
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button onClick={() => setIsOpen(false)} className="button">
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ThreadCreateModal;
