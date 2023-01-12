// pages/index.tsx
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    require("../non-esm.js"); // Error!!
  }, []);
  return <div>test</div>;
};

export default Home;
