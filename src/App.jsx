import { createSignal, createEffect } from "solid-js";
import PageEntree from "./pages/dosEntrees/pageEntree";
import PageInscription from "./pages/dosEntrees/pageInscription";
import PageConnexion from "./pages/dosEntrees/pageConnexion";
import PageCodeVerif from "./pages/dosEntrees/pageCodeVerif";
import PageTableauBord from "./pages/dosProfil/pageTableauBord"
import PageModifProfil from "./pages/dosProfil/pageModifProfil";
import PagePlanning from "./pages/dosPlanning/pagePlanning";
import PageAjoutMission from "./pages/dosPlanning/pageAjoutMission"
import PageGestionComp from "./pages/dosGestionComp/pageGestionComp";
import PageDepotContrat from "./pages/dosGestionComp/pageDepotContrat";
import PageEtablissements from "./pages/dosEtablissements/pageEtablissements";
import PageEvalEtablis from "./pages/dosEtablissements/pageEvalEtablis";
import PageAjoutAvis from "./pages/dosEtablissements/pageAjoutAvis";
import PageChatGeneral from "./pages/dosChats/pageChatGeneral";
import PageListeChatsPrivés from "./pages/dosChats/pageListeChatsPrivés";

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
      <PageEtablissements hidden={page() !== "pageEtablissements"} setPage={setPage} userName={userName()}/>
      <PageEvalEtablis hidden={page() !== "pageEvalEtablis"} setPage={setPage} userName={userName()}/>
      <PageAjoutAvis hidden={page() !== "pageAjoutAvis"} setPage={setPage} userName={userName()}/>
      <PageChatGeneral hidden={page() !== "pageChatGeneral"} setPage={setPage} userName={userName()}/>
      <PageListeChatsPrivés hidden={page() !== "pageListeChatsPrivés"} setPage={setPage} userName={userName()}/>
    </>
  );
};

export default App;
