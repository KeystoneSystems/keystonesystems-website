"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect, type ButtonHTMLAttributes } from "react";
import { CAL_LINK } from "@/lib/constants";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function CalPopupButton({ className, children, ...props }: Props) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#CD5C36" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      {...props}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
