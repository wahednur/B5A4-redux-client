import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider.tsx";
import "./index.css";
import store from "./redux/store.ts";
import router from "./routes/router.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
    <Toaster richColors position="top-right" />
  </StrictMode>
);
