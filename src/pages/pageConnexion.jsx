import { createSignal } from "solid-js";
import HeaderCommun from "../headerJSX/headerCommun";
import "../css/stConnexion.css";

export default (props) => {

    const [idText, setIdText] = createSignal("");
    const [mdp, setMdp] = createSignal("");
    const [error, setError] = createSignal("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mdp() === "1234") {
            setError("Le mot de passe est incorrect !");
        } else {
            setError("");
            setIdText("");
            setMdp("");
            props.setPage("pageTableauBord");
        }
    };

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderCommun />
        <div id="pConnexion">
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit} class="form-connexion">
                <div class="formConnexion">
                    <span class="labelText">Identifiant</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="utilID" id="utilID" required
                        onInput={(e) => setIdText(e.currentTarget.value)}
                        value={idText()} 
                    />
                </div>
                <div class="formConnexion">
                    <span class="labelText">Mot de passe</span>
                    <span class="doublePoints">:</span>
                    <input type="password" id="mdp" name="mdp" required 
                        onInput={(e) => setMdp(e.currentTarget.value)}
                        value={mdp()}
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
