import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname === "/simple_file") {
    return serveFile(req, "./path/to/file.txt");
  }

  return serveDir(req, {
    fsRoot: ".",
    urlRoot: "",
  });

  return new Response("404: Not Found", {
    status: 404,
  });
});
