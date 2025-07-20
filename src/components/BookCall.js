// src/components/BookCall.js
//import React, { useState } from 'react';
/*import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

Modal.setAppElement('#root');

const BookCall = ({ isOpen, onRequestClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    notes: '',
    reminder: false,
  });

  const availableTimes = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM',
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., send to backend)
    console.log('Booking info:', {
      ...formData,
      selectedDate,
      selectedTime,
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Book a Call"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-[#121212] max-w-xl w-full rounded-2xl p-8 max-h-[95vh] overflow-y-auto border border-neutral"
    >
      <h2 className="text-xl font-semibold mb-6 text-white">Book a Call</h2>

      {step === 1 && (
        <div className="space-y-6">
          <label className="block text-sm text-neutral">Select a date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              handleNext();
            }}
            minDate={new Date()}
            className="w-full p-4 rounded-md border border-neutral bg-transparent text-white"
            placeholderText="Choose a date"
            dateFormat="MMMM d, yyyy"
          />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <label className="block text-sm text-neutral mb-2">Select a time</label>
          <div className="grid grid-cols-2 gap-4">
            {availableTimes.map((time) => (
              <button
                key={time}
                className={`p-3 rounded-md border ${
                  selectedTime === time ? 'border-primary bg-primary/10 text-primary' : 'border-neutral text-white'
                }`}
                onClick={() => {
                  setSelectedTime(time);
                  handleNext();
                }}
              >
                {time}
              </button>
            ))}
          </div>
          <button onClick={handleBack} className="text-sm text-neutral hover:text-white mt-4">← Back</button>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm text-neutral block mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-4 rounded-md border border-neutral bg-transparent text-white"
            />
          </div>
          <div>
            <label className="text-sm text-neutral block mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full p-4 rounded-md border border-neutral bg-transparent text-white"
            />
          </div>
          <div>
            <label className="text-sm text-neutral block mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 rounded-md border border-neutral bg-transparent text-white"
            />
          </div>
          <div>
            <label className="text-sm text-neutral block mb-1">Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full p-4 min-h-[100px] rounded-md border border-neutral bg-transparent text-white"
            />
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="reminder"
              checked={formData.reminder}
              onChange={handleInputChange}
              className="accent-primary"
            />
            <label className="text-sm text-neutral">Send me a reminder email</label>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button type="button" onClick={handleBack} className="text-sm text-neutral hover:text-white">← Back</button>
            <button type="submit" className="cta-button">Confirm Booking →</button>
          </div>
        </form>
      )}
    </Modal>
  );
};*/

const BookCall = () => {
  // your component code here
  return (
    <div>
      {/* JSX */}
    </div>
  );
};


export default BookCall;
