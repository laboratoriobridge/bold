/* tslint:disable */
import * as React from "react";

const SvgColor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <defs>
      <path
        id="color_svg__a"
        d="M12 20V4c4.411 0 8 3.588 8 8s-3.589 8-8 8m0-18C6.486 2 2 6.485 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.515-4.486-10-10-10"
      />
    </defs>
    <use transform="translate(-2 -2)" xlinkHref="#color_svg__a" />
  </svg>
);

export default SvgColor;
