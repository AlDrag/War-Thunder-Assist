// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

(() => {
  const body: HTMLElement | null = document.querySelector("body");

  if (body) {
    body.innerHTML = "<h1>Hello World</h1>";
  }
})();
