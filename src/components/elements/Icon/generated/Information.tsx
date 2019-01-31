/* tslint:disable */
import * as React from "react";

const SvgInformation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em">
    <g data-name="information">
      <circle cx={12} cy={6} r={2} />
      <path d="M14.5 18a1 1 0 0 1-1-1v-7h-5v2h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v2h7v-2z" />
    </g>
  </svg>
);

export default SvgInformation;
