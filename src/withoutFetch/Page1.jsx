import Contents from "./Contents";
import Header from "./Header";

function Page1() {
  return (
    <>
      <Header title="page1" />

      <Contents count={100} />
    </>
  );
}

export default Page1;
