import { createSignal, createEffect } from "solid-js";
import PageEntree from "./pages/pageEntree";
import PageInscription from "./pages/pageInscription";
import PageConnexion from "./pages/pageConnexion";
import PageCodeVerif from "./pages/pageCodeVerif";
import PageTableauBord from "./pages/pageTableauBord"
import PageModifProfil from "./pages/pageModifProfil";
import PageAjoutMission from "./pages/pageAjoutMission"
import PagePlanning from "./pages/pagePlanning";

const App = () => {
  const [page, setPage] = createSignal("pageTableauBord");

  // Debug facile
  createEffect(() => console.log("Current page:", page()));

  return (
    <>
      <PageEntree hidden={page() !== "pageEntree"} setPage={setPage} />
      <PageInscription hidden={page() !== "pageInscription"} setPage={setPage} />
      <PageConnexion hidden={page() !== "pageConnexion"} setPage={setPage} />
      <PageCodeVerif hidden={page() !== "pageCodeVerif"} setPage={setPage} />
      <PageTableauBord hidden={page() !== "pageTableauBord"} setPage={setPage} />
      <PageModifProfil hidden={page() !== "pageModifProfil"} setPage={setPage} />
      <PagePlanning hidden={page() !== "pagePlanning"} setPage={setPage} />
      <PageAjoutMission hidden={page() !== "pageAjoutMission"} setPage={setPage} />
    </>
  );
};

export default App;
