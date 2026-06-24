import { mkdir, copyFile, readFile, writeFile } from "node:fs/promises";

const html = await readFile("src/index.html", "utf8");

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");

const worker = `const html = ${JSON.stringify(html)};

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/healthz") {
      return new Response("ok", {
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=300"
      }
    });
  }
};
`;

await writeFile("dist/server/index.js", worker);
