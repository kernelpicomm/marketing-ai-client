"use client";

import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowPopup(true);
    } else {
      setAccepted(consent === "accepted");
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setAccepted(true);
    setShowPopup(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookie-consent", "denied");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between">
      <p className="text-sm">
        We use cookies to improve your experience. By continuing, you accept our{" "}
        <a href="/privacy-policy" className="underline">
          cookie policy
        </a>.
      </p>
      <div className="flex space-x-3 mt-3 sm:mt-0">
        <button
          className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
          onClick={handleDeny}
        >
          Deny
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
