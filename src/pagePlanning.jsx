import HeaderUtilisateur from "./headerUtilisateur";
// import "./css/stPlanning.css"

export default (props) => {
  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur />
        <div id="pPlanning">
        </div>
    </div>
  );
};