import HeaderUtilisateur from "../../communJSX/headerUtilisateur";
import "../../css/profils/stTableauBord.css"

export default (props) => {
  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <div id="pTableauBord">
            <h1>Tableau de Bord</h1>
            <div class="buttons">
                <button onClick={() => props.setPage("pagePlanning")}>Planning</button>
                <button onClick={() => props.setPage("pageGestionComp")}>Gestion Comptabilité</button>
            </div>
            <div class="buttons">
                <div class="zoneCommu">
                    <button onClick={() => props.setPage("pageCommunication")}>Communication</button>
                    <div class="hoverCommu">
                        <button class="sousBouton" onClick={() => props.setPage("pageChatGeneral")}>Chat Public</button>
                        <button class="sousBouton" onClick={() => props.setPage("pageListeChatsPrivés")}>Chats Privés</button>
                    </div>
                </div>
                <button onClick={() => props.setPage("pageEtablissements")}>Evaluation des Etablissements</button>
            </div>
            <div class="buttons">
                <button onClick={() => props.setPage("pageSecurite")}>Sécurité</button>
            </div>
        </div>
    </div>
  );
};
