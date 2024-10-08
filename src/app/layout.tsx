import { PropsWithChildren } from "react";
import { Providers } from "./providers";

import "./global.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <title>test</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
