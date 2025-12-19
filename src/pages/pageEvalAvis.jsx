import HeaderUtilisateur from "../communJSX/headerUtilisateur";
import BoutonRetour from "../communJSX/boutonRetour";
import "../css/stEvalAvis.css"

export default (props) => {
    
    const directionPage = () => props.setPage("pageTableauBord");

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <BoutonRetour onClick={directionPage} label="<---" />
        <div id="pEvalAvis">
            <h1>Evaluation des Etablissements</h1>
        </div>
    </div>
  );
};
