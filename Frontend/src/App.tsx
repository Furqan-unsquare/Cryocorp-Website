import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import Layout from "@/Layout/Layout";

// Blog Public Pages
import HomePage from "@/components/Blog/HomePage";
import BlogDetailPage from "@/components/Blog/BlogDetailPage";

// Static Content Pages (inside PublicLayout)
import Index from "@/pages/Index";
import ProductsContainer from "@/pages/ProductContainer";
import Services from "@/pages/Services";
import Resources from "@/pages/Resource";
import About from "@/pages/About";
import Privacy from "@/components/Privacy";
import Disclaimer from "@/components/Disclaimer";
import PopupBannerAds from "@/components/AddPopup";

// Utility
import NotFound from "@/pages/NotFound";
import Quiz from "./pages/Quiz";
import WhatsAppRedirect from "./components/Whatsapp";
import ASUQuizPromo from "./components/Quiz/ASUQuizPromo";
import PSASystemQuiz from "./components/Quiz/PSASystemQuiz";
import CryogenicQuizPromo from "./components/Quiz/CryogenicQuizPromo";
import QuizInfoForm from "./components/Quiz/QuizInfoForm";
import { useEffect, useState } from "react";
import ChatBot from "./components/Chatbot";
import HeroSection from "@/components/Quiz/HeroSection";

const queryClient = new QueryClient();

const App = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  // Auto-open the modal on component mount
  useEffect(() => {
    setIsQuizOpen(true);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* ✅ Public routes with shared PublicLayout (navbar/footer) */}
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<ProductsContainer />} />
                <Route
                  path="/products/:productType"
                  element={<ProductsContainer />}
                />
                <Route path="/services" element={<Services />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/blog" element={<HomePage />} />
                <Route path="blog/:id" element={<BlogDetailPage />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route
                  path="/quiz-form/:link"
                  element={
                    <QuizInfoForm
                      isOpen={isQuizOpen}
                      onClose={() => setIsQuizOpen(false)}
                    />
                  }
                />
                <Route path="/asu-quiz" element={<ASUQuizPromo />} />
                <Route path="/psa-quiz" element={<PSASystemQuiz />} />
                <Route path="/select-quiz" element={<HeroSection />} />
                <Route
                  path="/cryogenic-quiz"
                  element={<CryogenicQuizPromo />}
                />
                <Route
                  path="/whatsapp"
                  element={
                    <WhatsAppRedirect link="https://api.whatsapp.com/send?phone=917710089939" />
                  }
                />
                <Route
                  path="/chat"
                  element={
                    <ChatBot link="https://agentivehub.com/chat/49559140-605e-458a-ab98-0708f11ddb21" />
                  }
                />
              </Route>

              {/* ❌ 404 Not Found */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
export default App;
