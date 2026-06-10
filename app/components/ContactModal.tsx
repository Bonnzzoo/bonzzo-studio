"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      setStatus("idle"); // Reset status when opening
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (response.status === 200) {
        setStatus("success");
      } else {
        console.error(result);
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="contact-modal-content">
        <button className="contact-modal-close" onClick={onClose}>✕</button>
        
        {status === "success" ? (
          <div className="form-success-state modal-success-state">
            <div className="success-icon">✦</div>
            <h3>MESSAGE RECEIVED</h3>
            <p>Thanks for reaching out! I'll get back to you as soon as possible.</p>
            <button onClick={() => setStatus("idle")} className="form-submit" style={{ marginTop: '24px' }}>
              SEND ANOTHER <span className="submit-arrow">↗</span>
            </button>
          </div>
        ) : (
          <div className="contact-modal-form-wrapper">
            <h3 className="contact-modal-title">LET&apos;S CREATE</h3>
            <p className="contact-modal-desc">Have a project in mind? Fill out the form below.</p>
            <form onSubmit={handleSubmit} className="contact-form modal-form">
              <input type="hidden" name="access_key" value="0b5b4147-4832-42c5-b2f7-3fe30f4169d3" />
              <div className="form-group">
                <input type="text" name="name" placeholder="NAME" required className="form-input" disabled={status === "submitting"} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="EMAIL" required className="form-input" disabled={status === "submitting"} />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="MESSAGE" required className="form-textarea" rows={4} disabled={status === "submitting"}></textarea>
              </div>
              {status === "error" && <p className="form-error-msg">Something went wrong. Please try again.</p>}
              <button type="submit" className="form-submit" disabled={status === "submitting"}>
                {status === "submitting" ? "SENDING..." : "SEND MESSAGE"} <span className="submit-arrow">↗</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
