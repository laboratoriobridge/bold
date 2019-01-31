/* tslint:disable */
import * as React from "react";

const SvgPrinter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props} width="1em" height="1em">
    <path
      data-name="printer"
      d="M20 9h-1V5.83L15 2H7.71A2.87 2.87 0 0 0 5 5v4H4a2 2 0 0 0-2 2v8h3v3h14v-3h3v-8a2 2 0 0 0-2-2zM7 5c0-.54.33-1 .71-1h6.46L17 6.69V9H7zm10 15H7v-3h10zm3-7h-2v-2h2z"
    />
  </svg>
);

export default SvgPrinter;
