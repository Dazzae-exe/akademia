import Navbar from "../components/ui/navbar";
import { Toaster } from "@/components/ui/sonner"
import { Outlet } from "react-router-dom";
import { Footer } from "../components/ui/footer";

export const RootLayout = () => {
  return (
    <div className="space-y-16">
      <Navbar />

      <main>
        <Outlet />
        <Toaster />
      </main>

      <Footer />
    </div>
  );
};
