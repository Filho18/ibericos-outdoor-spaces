
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PergolasBioclimaticas from "./pages/PergolasBioclimaticas";
import ToldosCofresMotorizados from "./pages/ToldosCofresMotorizados";
import PergolasLanding from "./pages/PergolasLanding";
import ToldosOrcamento from "./pages/ToldosOrcamento";
import NotFound from "./pages/NotFound";
import MetaTags from "./components/MetaTags";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MetaTags />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pergolas-bioclimaticas" element={<PergolasBioclimaticas />} />
          <Route path="/toldos-cofres-motorizados" element={<ToldosCofresMotorizados />} />
          <Route path="/pergolas-orcamento" element={<PergolasLanding />} />
          <Route path="/toldos-orcamento" element={<ToldosOrcamento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
