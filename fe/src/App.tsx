import { Route, Routes } from "react-router-dom";

// Guard
import Authentication from "./guards/RequireAuth";
// Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Hero from "./pages/Hero/Hero";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route element={<Authentication />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
