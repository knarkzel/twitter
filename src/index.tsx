import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { type PropsWithChildren } from "@kitajs/html";

function Page(props: PropsWithChildren<{ title: string }>) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{props.title}</title>
        </head>
        <body>{props.children}</body>
      </html>
    </>
  );
}

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <Page title="Twitter">
      <h1>Welcome to Twitter</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </Page>
  ))
  .listen(3000);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
