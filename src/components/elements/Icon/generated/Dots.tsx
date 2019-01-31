/* tslint:disable */
import * as React from "react";

const SvgDots = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <defs>
      <path
        id="dots_svg__a"
        d="M12 8a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 8zm0 2a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10zm0 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 16z"
      />
    </defs>
    <use xlinkHref="#dots_svg__a" />
  </svg>
);

export default SvgDots;
