"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  const handleManage = () => {
    console.log("Manage cookies clicked");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-end md:items-center justify-center z-50 bg-black/50 p-4">
      <div className="bg-white p-6 md:p-8 max-w-md w-full rounded-lg shadow-lg text-center">
        <h2 className="text-lg md:text-xl font-semibold mb-2">We use cookies</h2>
        <p className="text-sm md:text-base mb-4">
          We use our own and third-party cookies to personalize content and analyze web traffic.
        </p>

        <div className="flex flex-col gap-2">
          <Button
            onClick={handleAccept}
            className="w-full bg-black hover:bg-gray-800 text-white rounded-full"
          >
            Accept
          </Button>

          <Button
            onClick={handleReject}
            variant="outline"
            className="w-full border-black hover:bg-gray-100 rounded-full"
          >
            Reject all
          </Button>

          <button
            onClick={handleManage}
            className="text-xs underline mt-2 text-center w-full hover:text-gray-700"
          >
            Manage cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
