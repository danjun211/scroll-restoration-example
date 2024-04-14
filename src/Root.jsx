import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAppStore from "./useAppStore";

function Root() {
  useEffect(() => {
    const shouldPersist = localStorage.getItem("persist") === "Y";

    shouldPersist && useAppStore.persist.rehydrate();
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default Root;
