import { createSignal, createEffect } from "solid-js";
import PageEntree from "./pages/pageEntree";
import PageInscription from "./pages/pageInscription";
import PageConnexion from "./pages/pageConnexion";
import PageCodeVerif from "./pages/pageCodeVerif";
import PageTableauBord from "./pages/pageTableauBord"
import PageModifProfil from "./pages/pageModifProfil";
import PagePlanning from "./pages/pagePlanning";
import PageAjoutMission from "./pages/pageAjoutMission"
import PageGestionComp from "./pages/pageGestionComp";
import PageDepotContrat from "./pages/pageDepotContrat";
import PageEvalAvis from "./pages/pageEvalAvis";

const App = () => {
  const [page, setPage] = createSignal("pageEntree");
  const [userName, setUserName] = createSignal("");

  // Debug facile
  createEffect(() => console.log("Current page:", page(), "User:", userName()));

  return (
    <>
      <PageEntree hidden={page() !== "pageEntree"} setPage={setPage} />
      <PageInscription hidden={page() !== "pageInscription"} setPage={setPage} setUserName={setUserName}/>
      <PageConnexion hidden={page() !== "pageConnexion"} setPage={setPage} />
      <PageCodeVerif hidden={page() !== "pageCodeVerif"} setPage={setPage} />
      <PageTableauBord hidden={page() !== "pageTableauBord"} setPage={setPage} userName={userName()}/>
      <PageModifProfil hidden={page() !== "pageModifProfil"} setPage={setPage} userName={userName()} setUserName={setUserName}/>
      <PagePlanning hidden={page() !== "pagePlanning"} setPage={setPage} userName={userName()}/>
      <PageAjoutMission hidden={page() !== "pageAjoutMission"} setPage={setPage} userName={userName()}/>
      <PageGestionComp hidden={page() !== "pageGestionComp"} setPage={setPage} userName={userName()}/>
      <PageDepotContrat hidden={page() !== "pageDepotContrat"} setPage={setPage} userName={userName()}/>
      <PageEvalAvis hidden={page() !== "pageEvalAvis"} setPage={setPage} userName={userName()}/>
    </>
  );
};

export default App;
