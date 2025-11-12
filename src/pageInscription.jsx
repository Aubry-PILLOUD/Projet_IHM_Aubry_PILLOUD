import HeaderCommun from "./headerCommun";

export default (props) => {
  return (
    <div id="pInscription" class={props.hidden ? "hidden" : ""}>
        <HeaderCommun />
        <h1>Inscription</h1>
        <div class="formInscription">
            <form action="" method="get" class="form-inscription">
                <div class="form-inscription">
                    <label for="utilID">Identifiant : </label>
                    <input type="text" name="utilID" id="utilID" required />
                </div>
                <div class="form-inscription">
                    <label for="email">Email : </label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div class="form-inscription">
                    <label for="telephone">Numéro de téléphone : </label>
                    <input type="tel" id="telephone" name="telephone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" required/>
                </div>
                <div class="form-inscription">
                    <label for="mdp">Mot de passe : </label>
                    <input type="password" id="mdp" name="mdp" required />
                </div>
                <div class="form-inscription">
                    <label for="confMdp">Confirmation Mot de passe : </label>
                    <input type="password" id="confMdp" name="confMdp" required />
                </div>
                <div class="form-inscription">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </div>
    </div>
  );
};
