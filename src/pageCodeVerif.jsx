import HeaderCommun from "./headerCommun";

export default (props) => {
  return (
    <div id="pCodeVerif" class={props.hidden ? "hidden" : ""}>
        <HeaderCommun />
        <h1>Inscription</h1>
        <form action="" method="get" class="code-verif">
            <div class="code-verif">
                <label for="codeV">Code de Verification</label><br />
                <input type="number" name="codeV" id="codeV" size="6" required />
            </div>
            <div class="code-verif">
                <input type="submit" value="Valider" />
            </div>
        </form>
    </div>
  );
};
