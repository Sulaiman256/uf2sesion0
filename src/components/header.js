import { menu } from "./menu.js";

export function header() {
  console.log("header");
  return `
  <header>
  ${menu()}
  </header>
  `;
}
