import HeaderCommun from "./headerCommun";
import "./css/headerUtilisateur.css";

export default () => {
  return (
    <header id="hUtil">
      <div class="gauche">
        <HeaderCommun />
      </div>
      <div class="idNom">Nom Prénom</div>
      <button class="bProfil">Profil</button>
    </header>
  );
};