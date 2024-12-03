import Navbar from "../components/ui/navbar";
import { Toaster } from "@/components/ui/sonner"
import { Outlet } from "react-router-dom";
import { Footer } from "../components/ui/footer";
import { useLocation } from "react-router-dom";

export const RootLayout = () => {
  const location = useLocation();

  console.log(location.pathname.includes('/course/'));

  return (
    <div className="space-y-16">
      {location.pathname.includes('/course/') ? "" : ( <Navbar />)}
     

      <main>
        <Outlet />
        <Toaster />
      </main>

      <Footer />
    </div>
  );
};
