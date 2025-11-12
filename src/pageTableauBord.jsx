import HeaderCommun from "./headerCommun";

export default (props) => {
  return (
    <div id="pTableauBord" class={props.hidden ? "hidden" : ""}>
        <HeaderCommun />
        <h1>Tableau de Bord</h1>
        <div class="buttons">
            <button onClick={() => props.setPage("pagePlanning")}>Planning</button>
            <button onClick={() => props.setPage("pageGestionComp")}>Gestion Comptabilité</button>
        </div>
        <div class="buttons">
            <button onClick={() => props.setPage("pageCommunication")}>Communication</button>
            <button onClick={() => props.setPage("pageEvaluation")}>Evaluation des Etablissements</button>
        </div>
        <div class="buttons2">
            <button onClick={() => props.setPage("Securite")}>Sécurité</button>
        </div>
    </div>
  );
};
