import { useEffect, useState } from "react";
import Navigations from "./Navigations";
import useAppStore from "./useAppStore";

const Header = ({ title }) => {
  const [scroll, setScroll] = useState(window.scrollY);

  const mode = useAppStore((state) => state.mode);
  const setMode = useAppStore((state) => state.setMode);
  const [shouldPersist, setShouldPersist] = useState(
    localStorage.getItem("persist") || "N"
  );

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
      <h1>{title}</h1>
      <div>현재 스크롤 Y 포지션: {scroll}</div>
      <select value={mode} onChange={(e) => setMode(e.currentTarget.value)}>
        <option value="즉시 로드">즉시 로드</option>
        <option value="지연 로드">지연 로드</option>
      </select>
      <div>
        <input
          type="radio"
          name="persist"
          value="true"
          checked={shouldPersist === "Y"}
          onChange={() => {
            localStorage.setItem("persist", "Y");
            setShouldPersist("Y");
          }}
        />
        Persist
        <input
          type="radio"
          name="persist"
          value="false"
          checked={shouldPersist === "N"}
          onChange={() => {
            localStorage.setItem("persist", "N");
            setShouldPersist("N");
          }}
        />
        No Persist
      </div>
      <Navigations />
    </div>
  );
};

export default Header;
