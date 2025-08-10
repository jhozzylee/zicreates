import React, { useEffect } from "react";
import Modal from "react-modal";
import Cal, { getCalApi } from "@calcom/embed-react";

Modal.setAppElement("#root");

const BookCall = ({ isOpen, onClose }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "booking" });
      cal("ui", {
        theme: "dark",
        layout: "month_view",
        hideEventTypeDetails: true,
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#F0F8FF", // Brand color (light theme)
          },
          dark: {
            "cal-brand": "#30D5C8", // Zi Creates primary
            "cal-text": "#F0F8FF",
            "cal-background": "#121212",
            "cal-border-radius": "50%", // Attempt to make date boxes circular
          },
        },
      });
    })();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Book a Call"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center"
      className="bg-background border border-neutral/20 max-w-4xl w-full rounded-[8px] p-4 md:p-8 max-h-[95vh] overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-neutral">
          Let’s Make Something Great Together
        </h2>
        <button
          onClick={onClose}
          className="text-neutral hover:text-primary text-2xl"
        >
          &times;
        </button>
      </div>

      <div className="h-[650px]">
        <Cal
          namespace="booking"
          calLink="zi-creates/booking"
          style={{
            width: "100%",
            height: "100%",
            overflow: "scroll",
          }}
          config={{
            layout: "month_view",
            theme: "dark",
          }}
        />
      </div>
    </Modal>
  );
};

export default BookCall;
