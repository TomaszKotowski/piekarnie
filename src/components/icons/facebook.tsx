import * as React from "react";

const FacebookIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={32}
    height={32}
    {...props}
  >
    <path d="M3.5 1A2.507 2.507 0 0 0 1 3.5v8C1 12.875 2.125 14 3.5 14h8c1.375 0 2.5-1.125 2.5-2.5v-8C14 2.125 12.875 1 11.5 1h-8zm0 1h8c.835 0 1.5.665 1.5 1.5v8c0 .835-.665 1.5-1.5 1.5H9.904V8.967h1.397l.209-1.61H9.904V6.332c0-.466.13-.783.803-.783h.86v-1.44c-.15-.02-.66-.062-1.253-.062-1.238 0-2.084.749-2.084 2.125v1.185L7 7.354v1.609l1.23.004V13H3.5c-.835 0-1.5-.665-1.5-1.5v-8C2 2.665 2.665 2 3.5 2z" />
  </svg>
);

export { FacebookIcon };
