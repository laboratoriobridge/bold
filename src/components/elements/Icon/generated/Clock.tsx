/* tslint:disable */
import * as React from "react";

const SvgClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em">
    <g data-name="clock">
      <path d="M13 7h-2v6h.01v.01l3.2 3.2 1.42-1.42L13 12.17V7z" />
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    </g>
  </svg>
);

export default SvgClock;
