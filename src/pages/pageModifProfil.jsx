import HeaderUtilisateur from "../headerJSX/headerUtilisateur";
import { createSignal } from "solid-js";
import "../css/stModifProfil.css"

export default (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const nom = e.currentTarget.nom.value;
        const prenom = e.currentTarget.prenom.value;
        props.setUserName(`${nom} ${prenom}`);
        props.setPage("pageTableauBord");
    };

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <div id="pModifProfil">
            <h1>Profil</h1>
            <form onSubmit={handleSubmit} class="form-profil">
                <div class="formProfil">
                    <span class="labelText">Nom</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="nom" id="nom" required />
                </div>
                <div class="formProfil">
                    <span class="labelText">Prénom</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="prenom" id="prenom" required />
                </div>
                <div class="formProfil">
                    <span class="labelText">Date de naissance</span>
                    <span class="doublePoints">:</span>
                    <input type="date" name="naissance" id="naissance" required />
                </div>
                <div class="formProfil">
                    <span class="labelText">Adresse</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="adresse" id="adresse" required />
                </div>
                <div class="formProfil">
                    <span class="labelText">Numéro RPPS</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="rpps" id="rpps" min="0" default="0" required />
                </div>
                <div class="boutonValid">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </div>
    </div>
  );
};
