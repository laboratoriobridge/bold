/* tslint:disable */
import * as React from "react";

const SvgEye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em">
    <g data-name="eye">
      <path d="M12 6C7.69 6 4.5 8.67 2 12c2.5 3.33 5.69 6 10 6s7.5-2.67 10-6c-2.5-3.33-5.69-6-10-6zm0 10.17A4.17 4.17 0 1 1 16.17 12 4.16 4.16 0 0 1 12 16.17z" />
      <circle cx={12} cy={12} r={2} />
    </g>
  </svg>
);

export default SvgEye;
