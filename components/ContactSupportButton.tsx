"use client";

import { useState } from "react";

// Starts as a plain "Contact Support" button, not a live tel:/mailto: link,
// so the contact info isn't sitting in the page's initial HTML for scrapers
// to harvest. One click swaps it into a real link showing the number/email,
// so a second tap (or the first click, on a device that already opens the
// relevant app) completes the call or draft.
export default function ContactSupportButton({
  phoneNumber,
  email,
  className = "",
}: {
  phoneNumber?: string;
  email?: string;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    if (email) {
      return (
        <a href={`mailto:${email}`} className={className}>
          {email}
        </a>
      );
    }
    return (
      <a
        href={`tel:${(phoneNumber ?? "").replace(/[^\d+]/g, "")}`}
        className={className}
      >
        {phoneNumber}
      </a>
    );
  }

  return (
    <button type="button" onClick={() => setRevealed(true)} className={className}>
      Contact Support
    </button>
  );
}
