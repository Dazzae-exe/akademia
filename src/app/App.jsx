import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/homepage";
import { RootLayout } from "../layout/root-layout";
import { Landing } from "../pages/landing";
import { AboutUs } from "../pages/about";
import { SignUp } from "../pages/auth/sign-up";
import { SignIn } from "../pages/auth/sign-in";
import { Error404 } from "../pages/error";
import { Pricing } from "../pages/pricing";
import { Checkout } from "../pages/checkout";
import { PurchaseComplete } from "../pages/checkout/purcharse-complete";
import { CourseConference } from "../pages/course";
import { FAQPage } from "../pages/faq";
import { CourseProvider } from "../context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error404 />}>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/app" element={<HomePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout">
          <Route index element={<Checkout />} />
          <Route
            path="/checkout/purchase-completed"
            element={<PurchaseComplete />}
          />
        </Route>
        <Route path="/course/:id" element={<CourseConference />} />
        <Route path="/faq" element={<FAQPage />} />
      </Route>

      <Route path="/auth">
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <CourseProvider>
      <RouterProvider
        router={router}
        fallbackElement={<Error404 />}
      />
    </CourseProvider>
  );
}

export default App;
