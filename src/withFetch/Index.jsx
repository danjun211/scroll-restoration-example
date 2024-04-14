import Contents from "./Contents";
import Header from "./Header";

function Index() {
  return (
    <>
      <Header title="Root" />
      <Contents count={1000} />
    </>
  );
}

export default Index;
