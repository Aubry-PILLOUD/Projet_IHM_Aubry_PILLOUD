import HeaderUtilisateur from "../../communJSX/headerUtilisateur";
import BoutonRetour from "../../communJSX/boutonRetour";
import "../../css/gestionComp/stGestionComp.css"

export default (props) => {

    const directionPage = () => props.setPage("pageTableauBord");

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <BoutonRetour onClick={directionPage} label="<---" />
        <div id="pGestionComp">
            <div class="partGestion">
                <h1>Gestion</h1>
                <button onClick={() => props.setPage("pageDepotContrat")}>Déposer Contrat</button>
                <button>Voir Contrat</button>
            </div>
            <div class="partCompta">
                <h1>Comptabilité</h1>
                <button>Déposer Fiche de Salaire</button>
                <button>Calcul Salaire</button>
                <button>Alerte Non Payement</button>
                <button>Nombres Heures/Semaines</button>
            </div>
        </div>
    </div>
  );
};
