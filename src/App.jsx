import { createSignal, createEffect } from "solid-js";
import PageEntree from "./pageEntree";
import PageInscription from "./pageInscription";

const App = () => {
  const [page, setPage] = createSignal("pageEntree");

  // Debug facile
  createEffect(() => console.log("Current page:", page()));

  return (
    <>
      <PageEntree hidden={page() !== "pageEntree"} setPage={setPage} />
      <PageInscription hidden={page() !== "pageInscription"} setPage={setPage} />
    </>
  );
};

export default App;
