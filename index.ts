import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname === "/simple_file") {
    return serveFile(req, "./path/to/file.txt");
  }

  const headers = [
    "hello: world",

    // For shared memory
    "Cross-Origin-Opener-Policy: same-origin",
    "Cross-Origin-Embedder-Policy: require-corp",
  ];

  return serveDir(req, {
    fsRoot: ".",
    urlRoot: "",
    headers,
  });

  return new Response("404: Not Found", {
    status: 404,
  });
});
