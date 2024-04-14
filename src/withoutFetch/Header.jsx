import { useEffect, useState } from "react";
import Navigations from "./Navigations";

const Header = ({ title }) => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header sticky">
      <h1>{title} (즉시 렌더링)</h1>
      <div>현재 스크롤 Y 포지션: {scroll}</div>
      <Navigations />
    </div>
  );
};

export default Header;
