import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SiteHeader />
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-6xl font-bold text-primary">404</h1>
          <p className="mb-6 font-body text-xl text-muted-foreground">Página não encontrada</p>
          <Link to="/" className="font-body text-primary underline hover:text-primary/80">
            Voltar para o início
          </Link>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default NotFound;