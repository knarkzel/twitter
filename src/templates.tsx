import { type PropsWithChildren } from "@kitajs/html";

export function Page(props: PropsWithChildren<{ title: string }>) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="color-scheme" content="light dark" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
          <title safe>{props.title}</title>
        </head>
        <body>
          <main class="container">{props.children}</main>
          <script src="https://unpkg.com/htmx.org@2.0.0-alpha1/dist/htmx.min.js"></script>
        </body>
      </html>
    </>
  );
}
