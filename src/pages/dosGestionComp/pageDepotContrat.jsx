import HeaderUtilisateur from "../../communJSX/headerUtilisateur";
import BoutonRetour from "../../communJSX/boutonRetour";
import "../../css/gestionComp/stDepotContrat.css"

export default (props) => {
    
    const directionPage = () => props.setPage("pageGestionComp");

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <BoutonRetour onClick={directionPage} label="<---" />
        <div id="pDepotContrat">
            <h1>Gestion : Déposer Contrat</h1>
            <div>
                <div class="formFile">
                    <span class="labelText">Déposer un fichier</span>
                    <span class="doublePoints">:</span>
                    <input type="file" name="fichier" id="fichier" required />
                </div>
                <div class="formAnnee">
                    <span class="labelText">Année</span>
                    <span class="doublePoints">:</span>
                    <input type="month" name="dateAnnee" id="dateAnnee" required />
                </div>
                <div class="boutonDepot">
                    <input type="submit" value="Déposer" />
                </div>
            </div>
        </div>
    </div>
  );
};
