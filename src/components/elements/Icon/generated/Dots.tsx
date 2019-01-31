/* tslint:disable */
import * as React from "react";

const SvgDots = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em">
    <g data-name="dots">
      <circle cx={12} cy={6} r={2} />
      <circle cx={12} cy={12} r={2} />
      <circle cx={12} cy={18} r={2} />
    </g>
  </svg>
);

export default SvgDots;
