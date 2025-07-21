import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const BookCall = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book a Call"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-white max-w-4xl w-full rounded-2xl p-4 md:p-8 max-h-[95vh] overflow-y-auto border border-neutral"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-background">Let’s Make Something Great Together</h2>
        <button onClick={onRequestClose} className="text-backgrounnd hover:text-primary text-2xl">&times;</button>
      </div>

      <iframe
        src="https://calendly.com/jzidah/30min"
        width="100%"
        height="650"
        frameBorder="0"
        className="rounded-lg"
        title="Book a call with Jzidah"
      />
    </Modal>
  );
};

export default BookCall;
