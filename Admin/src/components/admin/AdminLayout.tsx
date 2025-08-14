
import { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, BookOpen, MailCheck ,  User, LogOut, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { path: '/admin', label: 'Blogs', icon: BookOpen, exact: true },
    { path: '/admin/Subscribers', label: 'Subscribers', icon: MailCheck, exact: true },
    { path: '/admin/quiz', label: 'Quiz Emails', icon: MailCheck, exact: true },
    { path: '/admin/profile', label: 'Profile', icon: User, exact: false },
  ];

  const NavItems = ({ onItemClick }: { onItemClick?: () => void }) => (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const isActive = item.exact 
          ? location.pathname === item.path
          : location.pathname.startsWith(item.path);
        
        return (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onItemClick}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );

  const Sidebar = () => (
    <div className="h-full flex flex-col bg-white border-r">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-gray-900">Blog Admin</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome, {user?.name}</p>
      </div>
      
      <div className="flex-1 p-4">
        <NavItems onItemClick={() => setSidebarOpen(false)} />
      </div>
      
      <div className="p-4 border-t">
        <Button
          variant="outline"
          onClick={logout}
          className="w-full justify-start"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      {isMobile && (
        <header className="bg-white border-b px-4 py-3 flex items-center justify-between lg:hidden">
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <h1 className="font-semibold text-gray-900">Blog Admin</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </header>
      )}

      <div className="flex h-screen">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <aside className="w-64 hidden lg:block">
            <Sidebar />
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
