import { createSignal } from "solid-js";
import HeaderCommun from "../communJSX/headerCommun";
import "../css/stCodeVerif.css";

export default (props) => {
    const [codeV, setCodeV] = createSignal("");
    const [error, setError] = createSignal("");

    const handleKeyDown = (e) => {
        if (
            !(
            (e.key >= '0' && e.key <= '9') ||
            ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'].includes(e.key)
            )
        ) {
            e.preventDefault(); // bloque toute autre touche
        }
    };

  const handleInput = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCodeV(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codeV().length === 6) {
      setError("");
      setCodeV("");
      props.setPage("pageTableauBord");
    } else {
      setError("Veuillez entrer exactement 6 chiffres");
      /*alert("Veuillez entrer exactement 6 chiffres");*/
    }
  };

  return (
    <div class={props.hidden ? "hidden" : ""}>
      <HeaderCommun />
      <div id="pCodeVerif">
        <h1>Code de Vérification</h1>
        <form class="code-verif" onSubmit={handleSubmit} novalidate>
          <div class="code-verif">
            <label for="codeV">Code de Verification</label>
            <br />
            <input type="text" name="codeV" id="codeV"
              inputMode="numeric"
              pattern="\d{6}"
              minlength="6"
              maxlength="6"
              required
              value={codeV()}
              onKeyDown={handleKeyDown}
              onInput={handleInput}
              autocomplete="one-time-code"
            />
          </div>
          {error() && (
            <div style={{ color: "red", "margin-top": "10px", "font-size": "30px" }}>
                {error()}
            </div>
          )}
          <div class="code-verif boutonValid">
            <input type="submit" value="Valider" />
          </div>
        </form>
      </div>
    </div>
  );
};
