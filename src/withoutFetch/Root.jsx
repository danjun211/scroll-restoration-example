import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function Root() {
  // 페이지 이동시 스크롤 초기화
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
