const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  let url = ctx.URL.href;
  console.log(url);
  if (url === "http://localhost:3000/") {
    ctx.status = 200;
    ctx.response.set("content-type", "txt/html");
    ctx.type = "html";
    ctx.body = "<h1>Main Page</h1>";
  } else if (url === "http://localhost:3000/about") {
    ctx.status = 200;
    ctx.response.set("content-type", "txt/html");
    ctx.type = "html";

    ctx.body = "<h1>About Page</h1>";
  } else if (url === "http://localhost:3000/contact") {
    ctx.status = 200;
    ctx.response.set("content-type", "txt/html");
    ctx.type = "html";

    ctx.body = "<h1>Contact Page</h1>";
  } else {
    ctx.status = 404;
    ctx.response.set("content-type", "txt/html");
    ctx.type = "html";

    ctx.body = "<h1>404 Page</h1>";
  }
});

app.listen(3000);
