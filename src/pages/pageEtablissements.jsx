import HeaderUtilisateur from "../communJSX/headerUtilisateur";
import BoutonRetour from "../communJSX/boutonRetour";
import { For } from "solid-js";
import "../css/stEtablissements.css";

export default (props) => {
  const directionPage = () => props.setPage("pageTableauBord");

  const etablissements = [
    "Etablissement 1",
    "Etablissement 2",
    "Etablissement 3",
    "Etablissement 4",
    "Etablissement 5",
  ];

  return (
    <div class={props.hidden ? "hidden" : ""}>
      <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
      <BoutonRetour onClick={directionPage} label="<---" />
      <div id="pEtablissments">
        <h1>Évaluation des Établissements</h1>
        <div class="blocCentral">
            <For each={etablissements}>
                {(etab) => (
                <div class="sousBloc">
                    <div class="nomEtab">{etab()}</div>
                    <button class="boutonSelect" onClick={() => props.setPage("pageEvalEtablis")}>V</button>
                </div>
                )}
            </For>
        </div>
      </div>
    </div>
  );
};
