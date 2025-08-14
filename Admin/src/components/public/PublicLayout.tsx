
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, User } from 'lucide-react';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">BlogSpace</span>
            </Link>
            
            <nav className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Admin Login
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 BlogSpace. A modern blogging platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
