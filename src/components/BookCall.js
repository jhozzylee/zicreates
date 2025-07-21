import React from 'react';
import Modal from 'react-modal';
import { InlineWidget } from 'react-calendly';

Modal.setAppElement('#root');

const BookCall = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book a Call"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-background max-w-4xl w-full rounded-[8px] p-4 md:p-8 max-h-[95vh] overflow-y-auto border border-neutral/20"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-neutral font-semibold text-background">
          Let’s Make Something Great Together
        </h2>
        <button
          onClick={onRequestClose}
          className="text-neutral hover:text-primary text-2xl"
        >
          &times;
        </button>
      </div>

      <div className="h-[650px]">
        <InlineWidget
          url="https://calendly.com/jzidah/30min"
          styles={{ height: '100%', borderRadius: '8px' }}
          pageSettings={{
            primaryColor: '#F0F8FF',
            hideEventTypeDetails: true,
            backgroundColor: '#0F0F0F',
            textColor: '#F0F8FF'
          }}
        />
      </div>
    </Modal>
  );
};

export default BookCall;
