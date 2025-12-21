import HeaderUtilisateur from "../communJSX/headerUtilisateur";
import BoutonRetour from "../communJSX/boutonRetour";
import { createSignal } from "solid-js";
import "../css/stAjoutAvis.css";

export default (props) => {
    const directionPage = () => props.setPage("pageEvalEtablis");

    const [noteLocaux, setNoteLocaux] = createSignal("");
    const [noteRelAdmin, setNoteRelAdmin] = createSignal("");
    const [noteRelCadre, setNoteRelCadre] = createSignal("");
    const [noteAmbSoig, setNoteAmbSoig] = createSignal("");
    const [noteAmbPer, setNoteAmbPer] = createSignal("");
    const [commentaires, setCommentaires] = createSignal("");

    const [error, setError] = createSignal("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("Vote avis a été pris en compte");
    };

  return (
    <div class={props.hidden ? "hidden" : ""}>
      <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
      <BoutonRetour onClick={directionPage} label="<---" />
      <div id="pAjoutAvis">
        <h1>Avis</h1>
        <h1>Etablissement 1</h1>
        <form onSubmit={handleSubmit} class="form-avis">
            <div id="divNotes">
                <div class="formAvis">
                    <span class="labelText">Locaux</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="noteLocaux" id="noteLocaux" min="0" max="5" default="0" required 
                        onInput={(e) => setNoteLocaux(e.currentTarget.value)}
                        value={noteLocaux()}
                    />
                </div>
                <div class="formAvis">
                    <span class="labelText">Relation Administration</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="noteRelAdmin" id="noteRelAdmin" min="0" max="5" default="0" required
                        onInput={(e) => setNoteRelAdmin(e.currentTarget.value)}
                        value={noteRelAdmin()}
                    />
                </div>
                <div class="formAvis">
                    <span class="labelText">Relation avec le Cadre</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="noteRelCadre" id="noteRelCadre" min="0" max="5" default="0" required
                        onInput={(e) => setNoteRelCadre(e.currentTarget.value)}
                        value={noteRelCadre()}
                    />
                </div>
                <div class="formAvis">
                    <span class="labelText">Ambience Personnel Soignant</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="noteAmbSoig" id="noteAmbSoig" min="0" max="5" default="0" required
                        onInput={(e) => setNoteAmbSoig(e.currentTarget.value)}
                        value={noteAmbSoig()}
                    />
                </div>
                <div class="formAvis">
                    <span class="labelText">Ambience autres Personnels</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="noteAmbPer" id="noteAmbPer" min="0" max="5" default="0" required
                        onInput={(e) => setNoteAmbPer(e.currentTarget.value)}
                        value={commentaires()}
                    />
                </div>
            </div>
            <div class="formAvis">
                <span class="labelText">Commentaires</span>
                <span class="doublePoints">:</span>
                <input type="text" name="comment" id="comment"
                    onInput={(e) => setCommentaires(e.currentTarget.value)}
                    value={noteAmbPer()}
                />
            </div>
            {error() && (
                <div style={{ color: "green", "margin-top": "10px", "font-size": "30px" }}>
                    {error()}
                </div>
            )}
            <div class="boutonValid">
                <input type="submit" value="Ajouter l'Avis" />
            </div>
        </form>
      </div>
    </div>
  );
};
