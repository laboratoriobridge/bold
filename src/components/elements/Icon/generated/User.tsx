/* tslint:disable */
import * as React from "react";

const SvgUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em">
    <g data-name="user">
      <circle cx={12} cy={8} r={4} />
      <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
    </g>
  </svg>
);

export default SvgUser;
