import { lazy, Suspense } from "react";

import About from "../components/About";
import Main from "../components/Main";

const LazyFooter = lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Suspense fallback={null}>
        <LazyFooter />
      </Suspense>
    </>
  );
}
