// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIwidget from "@/components/AIwidget"
import FloatingButton from "@/components/FloatingButton"; // or whatever the file is called
import { NavigationProvider } from "@/contexts/NavigationContext";

const Layout = () => {
  return (
    <>
    <NavigationProvider>
      <Navbar />
      </NavigationProvider>
      <main className="min-h-screen">
        <Outlet />
      </main>
      {/* <AIwidget /> */}
      <Footer />
      <FloatingButton />
    </>
  );
};

export default Layout;
