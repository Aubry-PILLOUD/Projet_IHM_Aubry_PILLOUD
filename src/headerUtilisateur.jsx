import { createSignal } from "solid-js";
import HeaderCommun from "./headerCommun";
import "./css/headerUtilisateur.css";

export default () => {

    const [idNom, setIdNom] = createSignal("");

    const modifIdNom = (e) => {
        document.getElementByClass("idNom").innerHTML = e;
    }

  return (
    <header id="hUtil">
        <div class="gauche">
            <HeaderCommun />
        </div>
        <div class="idNom">Nom Prénom</div>
        <button class="bProfil">Profil</button>
        <div class="hoverProfil">
            <button class="bModProfil">Modifier</button>
            <button class="bDeconnexion">Deconnexion</button>
        </div>
    </header>
  );
};