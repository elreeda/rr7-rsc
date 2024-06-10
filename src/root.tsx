import { Links, Meta, Scripts, ScrollRestoration, Outlet } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brand Channel - Roadmap</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.global = window; var exports = {};`,
          }}
        />
        <Links />
        <Meta />
      </head>
      <body>
        <div id="root">{children}</div>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
