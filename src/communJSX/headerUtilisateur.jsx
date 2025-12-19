import { createSignal } from "solid-js";
import HeaderCommun from "./headerCommun";
import "../css/headerUtilisateur.css";

export default (props) => {
  return (
    <header id="hUtil">
        <div class="gauche">
            <HeaderCommun />
        </div>
        <div class="idNom">{props.userName || "Nom Prénom"}</div>
        <div class="zoneProfil">
            <button class="bProfil">Profil</button>
            <div class="hoverProfil">
                <button class="bModProfil" onClick={() => props.setPage("pageModifProfil")}>Modifier</button>
                <button class="bDeconnexion" onClick={() => props.setPage("pageEntree")}>Deconnexion</button>
            </div>
        </div>
    </header>
  );
};