import "../css/stBoutonRetour.css";

export default function BoutonRetour(props) {
  return (
    <aside id="bouton-aside">
      <button onClick={props.onClick}>
        {props.label || "<-"}
      </button>
    </aside>
  );
}
