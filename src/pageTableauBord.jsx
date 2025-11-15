import HeaderUtilisateur from "./headerUtilisateur";
import "./css/stTableauBord.css"

export default (props) => {
  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur />
        <div id="pTableauBord">
            <h1>Tableau de Bord</h1>
            <div class="buttons">
                <button onClick={() => props.setPage("pagePlanning")}>Planning</button>
                <button onClick={() => props.setPage("pageGestionComp")}>Gestion Comptabilité</button>
            </div>
            <div class="buttons">
                <button onClick={() => props.setPage("pageCommunication")}>Communication</button>
                <button onClick={() => props.setPage("pageEvaluation")}>Evaluation des Etablissements</button>
            </div>
            <div class="buttons">
                <button onClick={() => props.setPage("Securite")}>Sécurité</button>
            </div>
        </div>
    </div>
  );
};
