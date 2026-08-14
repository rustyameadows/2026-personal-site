"use client";

import { useEffect, useRef, useState } from "react";

const placeholderContactEmail = "hello@rustymeadows.com";

async function copyTextToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
}

export function SiteFooter() {
  const [contactToast, setContactToast] = useState<string | null>(null);
  const contactToastTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (contactToastTimeoutRef.current !== null) {
        window.clearTimeout(contactToastTimeoutRef.current);
      }
    };
  }, []);

  async function handleContactClick() {
    if (contactToastTimeoutRef.current !== null) {
      window.clearTimeout(contactToastTimeoutRef.current);
    }

    try {
      await copyTextToClipboard(placeholderContactEmail);
      setContactToast("Email copied to clipboard");
    } catch {
      setContactToast("Couldn’t copy email");
    }

    contactToastTimeoutRef.current = window.setTimeout(() => {
      setContactToast(null);
      contactToastTimeoutRef.current = null;
    }, 2400);
  }

  return (
    <footer className="site-footer">
      <button onClick={handleContactClick} type="button">
        Contact
      </button>
      <span>Rusty Meadows</span>
      <span>© 2026</span>
      {contactToast ? (
        <div className="project-contact-toast" role="status">
          {contactToast}
        </div>
      ) : null}
    </footer>
  );
}
