import { createSignal, createEffect } from "solid-js";
import PageEntree from "./pageEntree";
import PageInscription from "./pageInscription";
import PageCodeVerif from "./pageCodeVerif";
import PageTableauBord from "./pageTableauBord"
import PageModifProfil from "./pageModifProfil";
import PageAjoutMission from "./pageAjoutMission"
import PagePlanning from "./pagePlanning";

const App = () => {
  const [page, setPage] = createSignal("pageTableauBord");

  // Debug facile
  createEffect(() => console.log("Current page:", page()));

  return (
    <>
      <PageEntree hidden={page() !== "pageEntree"} setPage={setPage} />
      <PageInscription hidden={page() !== "pageInscription"} setPage={setPage} />
      <PageCodeVerif hidden={page() !== "pageCodeVerif"} setPage={setPage} />
      <PageTableauBord hidden={page() !== "pageTableauBord"} setPage={setPage} />
      <PageModifProfil hidden={page() !== "pageModifProfil"} setPage={setPage} />
      <PagePlanning hidden={page() !== "pagePlanning"} setPage={setPage} />
      <PageAjoutMission hidden={page() !== "pageAjoutMission"} setPage={setPage} />
    </>
  );
};

export default App;
