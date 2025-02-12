"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setHasAccepted(true);
    setShowBanner(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "denied");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white shadow-lg p-4 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
      <p className="text-sm text-gray-700">
        We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Accept
        </button>
        <button
          onClick={handleDeny}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Deny
        </button>
      </div>
    </div>
  );
}
