import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./fonts";
import "./index.css";

const root = document.getElementById("root")!;

// O build grava o HTML pronto de cada rota e marca qual e (data-ssr-path). Se o
// nginx serviu esse HTML para outra URL (ex.: 404 caindo no index.html da home),
// descarta e renderiza do zero em vez de hidratar a pagina errada.
const here = window.location.pathname.replace(/\/+$/, "") || "/";
if (root.dataset.ssrPath === here) {
  hydrateRoot(root, <App />);
} else {
  root.innerHTML = "";
  createRoot(root).render(<App />);
}
