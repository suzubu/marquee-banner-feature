import Marquee from "./components/Marquee";
import "./styles/style.css";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      {/* Default marquee */}
      <Marquee>Default: 100px/sec left, no tilt</Marquee>

      {/* Custom speed examples */}
      {/* <Marquee speed={200}>Fast scroll: 200px/sec</Marquee> */}

      {/* <Marquee speed={50}>Slow scroll: 50px/sec</Marquee> */}

      {/* Rightward scroll */}
      <Marquee direction="right">Rightward scroll</Marquee>

      {/* Tilted variants */}
      <Marquee tilt="5deg">Tilted +5deg</Marquee>

      {/* <Marquee tilt="-3deg" speed={80}>
        Tilted -3deg with custom speed
      </Marquee> */}

      {/* No pause on hover */}
      {/* <Marquee pauseOnHover={false}>No pause on hover</Marquee> */}

      {/* All props combined */}
      {/* <Marquee speed={60} tilt="4deg" direction="right" pauseOnHover={false}>
        Tilted rightward scroll at 60px/sec with no hover pause
      </Marquee> */}
    </div>
  );
}
