"use client";

import Script from "next/script";
import { useEffect, useId } from "react";
import { GOOGLE_APPOINTMENTS_URL } from "@/lib/calendar";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (opts: {
          url: string;
          color?: string;
          label?: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export function GoogleSchedulingButton({
  label = "Book a call",
}: {
  label?: string;
}) {
  const id = useId();

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) return;
    if (!window.calendar?.schedulingButton?.load) return;

    window.calendar.schedulingButton.load({
      url: GOOGLE_APPOINTMENTS_URL,
      color: "#141414",
      label,
      target,
    });
  }, [id, label]);

  return (
    <>
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="afterInteractive"
      />
      <span id={id} />
    </>
  );
}

