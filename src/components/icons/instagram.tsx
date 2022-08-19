import * as React from "react";

const InstagramIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={32}
    height={32}
    {...props}
  >
    <path d="M4.773 1A3.781 3.781 0 0 0 1 4.773v5.457A3.78 3.78 0 0 0 4.773 14h5.457A3.78 3.78 0 0 0 14 10.227V4.773A3.781 3.781 0 0 0 10.227 1Zm0 1h5.454A2.764 2.764 0 0 1 13 4.773v5.454A2.763 2.763 0 0 1 10.23 13H4.773A2.763 2.763 0 0 1 2 10.23V4.773A2.764 2.764 0 0 1 4.773 2ZM11.5 3c-.277 0-.5.223-.5.5s.223.5.5.5.5-.223.5-.5-.223-.5-.5-.5Zm-4 1A3.51 3.51 0 0 0 4 7.5 3.51 3.51 0 0 0 7.5 11 3.51 3.51 0 0 0 11 7.5 3.51 3.51 0 0 0 7.5 4Zm0 1C8.887 5 10 6.113 10 7.5S8.887 10 7.5 10A2.492 2.492 0 0 1 5 7.5C5 6.113 6.113 5 7.5 5Z" />
  </svg>
);

export { InstagramIcon };
