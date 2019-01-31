/* tslint:disable */
import * as React from "react";

const SvgCalendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em">
    <g data-name="calendar">
      <path d="M18 5h-2V3h-2v2h-4V3H8v2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 14H6V9h12z" />
      <path d="M8 11h8v2H8zM8 15h8v2H8z" />
    </g>
  </svg>
);

export default SvgCalendar;
