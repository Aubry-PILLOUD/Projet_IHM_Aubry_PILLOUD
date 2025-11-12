import "./css/entree.css"

export default (props) => {
  return (
    <div id="pEntree" class={props.hidden ? "hidden" : ""}>
      <h1>IDE Intérim</h1>
      <div class="buttons">
        <button onClick={() => props.setPage("pageInscription")}>S'Inscrire</button>
        <button onClick={() => props.setPage("pageConnexion")}>Connexion</button>
      </div>
    </div>
  );
};
