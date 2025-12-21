import HeaderUtilisateur from "../communJSX/headerUtilisateur";
import BoutonRetour from "../communJSX/boutonRetour";
import "../css/stEvalEtablis.css";

export default (props) => {
  const directionPage = () => props.setPage("pageEtablissements");

  return (
    <div class={props.hidden ? "hidden" : ""}>
      <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
      <BoutonRetour onClick={directionPage} label="<---" />
      <div id="pEvalEtablis">
        <h1>Évaluation</h1>
        <h1>Etablissement 1</h1>
        <div id="evalContenu">
            <div id="evalNote">
                <div class="ligneNote">
                    <span class="labelText">Locaux</span>
                    <span class="doublePoints">:</span>
                    <span class="note" id="note1">X</span>
                    <span class="sur">/10</span>
                </div>
                <div class="ligneNote">
                    <span class="labelText">Relation Administration</span>
                    <span class="doublePoints">:</span>
                    <span class="note" id="note2">X</span>
                    <span class="sur">/10</span>
                </div>
                <div class="ligneNote">
                    <span class="labelText">Relation avec le Cadre</span>
                    <span class="doublePoints">:</span>
                    <span class="note" id="note3">X</span>
                    <span class="sur">/10</span>
                </div>
                <div class="ligneNote">
                    <span class="labelText">Ambience Personnel Soignant</span>
                    <span class="doublePoints">:</span>
                    <span class="note" id="note4">X</span>
                    <span class="sur">/10</span>
                </div>
                <div class="ligneNote">
                    <span class="labelText">Ambience autres Personnels</span>
                    <span class="doublePoints">:</span>
                    <span class="note" id="note5">X</span>
                    <span class="sur">/10</span>
                </div>
            </div>
            <div id="evalCommentaire">
                <div class="titreComment">Commentaires</div>
                <div class="zoneCommentaire"></div>
            </div>
        </div>
        <button id="ajoutAvis" onClick={() => props.setPage("pageAjoutAvis")}>Ajouter un Avis</button>
      </div>
    </div>
  );
};
