import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { Page } from "./templates";

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <Page title="Twitter">
      <h1>Welcome to Twitter</h1>
      <form method="POST" action="/update" hx-swap="afterend" hx-post="/update">
        <label for="name">
          Name
          <input name="name" />
        </label>
        <label for="content">
          Content
          <textarea name="content" rows="4" />
        </label>
        <button type="submit">Get the data!</button>
      </form>
      <div></div>
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
