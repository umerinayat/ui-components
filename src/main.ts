// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


import UiButton from "./UiComponents/UiButton";
import UiParagraph from "./UiComponents/UiParagraph";

const uiButton1 = new UiButton({name: 'Button 1'});
const uiButton2 = new UiButton({name: 'Button 2'});

document.querySelector<HTMLDivElement>('#app')!.appendChild(uiButton1.element);
document.querySelector<HTMLDivElement>('#app')!.appendChild(uiButton2.element);


const p1 = new UiParagraph({name: 'Paragraph 1'});
const p2 = new UiButton({name: 'Paragraph 2'});

document.querySelector<HTMLDivElement>('#app')!.appendChild(p1.element);
document.querySelector<HTMLDivElement>('#app')!.appendChild(p2.element);

