import { lazy, Suspense } from "react";

const ThreeBackground = lazy(() => import("./ThreeBackground"));

function GlowBackground() {
  return (
    <div className="atmosphere pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <div className="atmosphere-grid" />
      <div className="atmosphere-halftone" />
      <div className="atmosphere-noise" />
      <span className="star-glow star-glow-one" />
      <span className="star-glow star-glow-two" />
      <span className="cross-mark cross-mark-one">+</span>
      <span className="cross-mark cross-mark-two">+</span>
      <span className="cross-mark cross-mark-three">+</span>
    </div>
  );
}

export default GlowBackground;
