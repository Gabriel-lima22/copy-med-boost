import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./App";

/**
 * Usado so no build (scripts/prerender-seo.mjs): devolve o HTML do corpo de uma
 * rota. Com ele o celular ja recebe texto e fotos prontos, sem esperar o JS; o
 * <head> continua vindo de seo-routes.ts.
 */
export const render = (url: string) =>
  renderToString(
    <HelmetProvider context={{}}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
