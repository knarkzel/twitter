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

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <Page title="witter">
      <h1>Welcome to Twitter</h1>
      <form method="POST" action="/update" hx-swap="afterend" hx-post="/update">
        <label for="name">
          Name
          <input name="name" />
        </label>
        <label for="content">
          Content
          <textarea name="content" />
        </label>
        <button type="submit">Get the data!</button>
      </form>
    </Page>
  ))
  .post("/update", ({ body: { name, content }}) => (
    <div>
      <h1>{name}</h1>
      <p>{content}</p>
    </div>
  ))
  .listen(3000);

console.log(`🌐 Started server at http://${app.server?.hostname}:${app.server?.port}`);
