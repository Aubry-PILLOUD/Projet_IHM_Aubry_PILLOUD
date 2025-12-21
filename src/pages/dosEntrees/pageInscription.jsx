import { createSignal } from "solid-js";
import HeaderCommun from "../../communJSX/headerCommun";
import BoutonRetour from "../../communJSX/boutonRetour";
import "../../css/entrees/stInscription.css";

export default (props) => {

    const directionPage = () => props.setPage("pageEntree");

    const [idText, setIdText] = createSignal("");
    const [emailForm, setEmailForm] = createSignal("");
    const [numTel, setNumTel] = createSignal("");
    const [mdp, setMdp] = createSignal("");
    const [confMdp, setConfMdp] = createSignal("");
    const [error, setError] = createSignal("");

    const handleKeyDown = (e) => {
        if (
            !(
            (e.key >= '0' && e.key <= '9') ||
            ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', '-'].includes(e.key)
            )
        ) {
            e.preventDefault(); // bloque toute autre touche
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mdp() !== confMdp()) {
            setError("Les mots de passe ne correspondent pas");
        } else {
            setError("");
            props.setUserName(idText());
            setIdText("");
            setEmailForm("");
            setNumTel("");
            props.setPage("pageCodeVerif");
        }
        setMdp("");
        setConfMdp("");
    };

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderCommun />
        <BoutonRetour onClick={directionPage} label="<---" />
        <div id="pInscription">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit} class="form-inscription">
                <div class="formInscription">
                    <span class="labelText">Identifiant</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="utilID" id="utilID" required 
                        onInput={(e) => setIdText(e.currentTarget.value)}
                        value={idText()}
                    />
                </div>
                <div class="formInscription">
                    <span class="labelText">Email</span>
                    <span class="doublePoints">:</span>
                    <input type="email" name="email" id="email" required 
                        onInput={(e) => setEmailForm(e.currentTarget.value)}
                        value={emailForm()}
                    />
                </div>
                <div class="formInscription">
                    <span class="labelText">Numéro de téléphone</span>
                    <span class="doublePoints">:</span>
                    <input type="tel" id="telephone" name="telephone" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" onKeyDown={handleKeyDown} required 
                        onInput={(e) => setNumTel(e.currentTarget.value)}
                        value={numTel()}
                    />
                </div>
                <div class="formInscription">
                    <span class="labelText">Mot de passe</span>
                    <span class="doublePoints">:</span>
                    <input type="password" id="mdp" name="mdp" required 
                        onInput={(e) => setMdp(e.currentTarget.value)}
                        value={mdp()}
                    />
                </div>
                <div class="formInscription">
                    <span class="labelText">Confirmation Mot de passe</span>
                    <span class="doublePoints">:</span>
                    <input type="password" id="confMdp" name="confMdp" required 
                        onInput={(e) => setConfMdp(e.currentTarget.value)}
                        value={confMdp()}
                    />
                </div>
                {error() && (
                    <div style={{ color: "red", "margin-top": "10px", "font-size": "30px" }}>
                    {error()}
                    </div>
                )}
                <div class="boutonValid">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </div>
    </div>
  );
};
