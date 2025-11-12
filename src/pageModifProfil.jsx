import HeaderCommun from "./headerCommun";

export default (props) => {
  return (
    <div id="pModifProfil" class={props.hidden ? "hidden" : ""}>
        <HeaderCommun />
        <h1>Profil</h1>
        <div class="formModifProfil">
            <form action="" method="get" class="form-profil">
                <div class="form-profil">
                    <label for="nom">Nom : </label>
                    <input type="text" name="nom" id="nom" required />
                </div>
                <div class="form-profil">
                    <label for="prenom">Prénom : </label>
                    <input type="text" name="prenom" id="prenom" required />
                </div>
                <div class="form-profil">
                    <label for="naissance">Date de naissance : </label>
                    <input type="date" name="naissance" id="naissance" required />
                </div>
                <div class="form-profil">
                    <label for="adresse">Adresse : </label>
                    <input type="text" name="adresse" id="adresse" required />
                </div>
                <div class="form-profil">
                    <label for="rpps">Numéro RPPS : </label>
                    <input type="number" name="rpps" id="rpps" min="0" default="0" required />
                </div>
                <div class="form-profil">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </div>
    </div>
  );
};
