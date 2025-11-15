import { createSignal, createEffect } from "solid-js";
import PageEntree from "./pageEntree";
import PageInscription from "./pageInscription";
import PageCodeVerif from "./pageCodeVerif";
import PageTableauBord from "./pageTableauBord"

const App = () => {
  const [page, setPage] = createSignal("pageEntree");

  // Debug facile
  createEffect(() => console.log("Current page:", page()));

  return (
    <>
      <PageEntree hidden={page() !== "pageEntree"} setPage={setPage} />
      <PageInscription hidden={page() !== "pageInscription"} setPage={setPage} />
      <PageCodeVerif hidden={page() !== "pageCodeVerif"} setPage={setPage} />
      <PageTableauBord hidden={page() !== "pageTableauBord"} setPage={setPage} />
    </>
  );
};

export default App;
