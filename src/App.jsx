import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import MyWork from "./pages/MyWork.jsx";
import Now from "./pages/Now.jsx";
import Contact from "./pages/Contact.jsx";
import CaseStudy from "./pages/CaseStudy.jsx";
import useTheme from "./hooks/useTheme.js";

// Fade transition wrapper. `mode="wait"` + a short duration
// guarantees the entering page is not left at opacity 0.
function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <ErrorBoundary>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <Page>
                    <Home />
                  </Page>
                }
              />
              <Route
                path="/skills"
                element={
                  <Page>
                    <Skills />
                  </Page>
                }
              />
              <Route
                path="/work"
                element={
                  <Page>
                    <MyWork />
                  </Page>
                }
              />
              <Route
                path="/work/:slug"
                element={
                  <Page>
                    <CaseStudy />
                  </Page>
                }
              />
              <Route
                path="/now"
                element={
                  <Page>
                    <Now />
                  </Page>
                }
              />
              <Route
                path="/contact"
                element={
                  <Page>
                    <Contact />
                  </Page>
                }
              />
            </Routes>
          </AnimatePresence>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}