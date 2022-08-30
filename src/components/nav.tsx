import React from "react";

import { Button } from "./button";

export function Nav() {
  return (
    <nav className="flex justify-between p-3 lg:py-4 mx-auto bg-gray-400">
      <Button className="self-start" variant="link" href="/">
        Home
      </Button>
      <Button variant="link" href="/add-bakery">
        Add bakery
      </Button>
    </nav>
  );
}
