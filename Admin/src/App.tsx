
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import AdminLayout from "@/components/admin/AdminLayout";
import PublicLayout from "@/components/public/PublicLayout";

// Pages
import HomePage from "@/components/public/HomePage";
import BlogDetailPage from "@/components/public/BlogDetailPage";
import LoginForm from "@/components/LoginForm";
import BlogList from "@/components/admin/BlogList";
import ProfilePage from "@/components/admin/ProfilePage";
import Subscribers from "@/components/admin/Subscribers";
import ProtectedRoute from "@/components/ProtectedRoute";
import NotFound from "./pages/NotFound";
import QuizTakersDashboard from "./components/admin/QuizTakersDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>

            {/* Login */}
            <Route path="/" element={<LoginForm />} />

            {/* Protected Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<BlogList />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="Subscribers" element={<Subscribers />} />
              <Route path="quiz" element={<QuizTakersDashboard />} />
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
