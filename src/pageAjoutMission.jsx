import HeaderCommun from "./headerCommun";

export default (props) => {
  return (
    <div id="pAjoutMission" class={props.hidden ? "hidden" : ""}>
        <HeaderCommun />
        <h1>Profil</h1>
        <div class="formAjoutMission">
            <form action="" method="get" class="form-mission">
                <div class="form-mission">
                    <label for="nomMision">Nom de la Mission : </label>
                    <input type="text" name="nomMision" id="nomMision" required />
                </div>
                <div>
                    <h3>Lieu de Travail</h3>
                </div>
                <div class="form-mission">
                    <label for="structure">Structure : </label>
                    <input type="text" name="structure" id="structure" required />
                </div>
                <div class="form-mission">
                    <label for="ville">Ville : </label>
                    <input type="text" name="ville" id="ville" required />
                </div>
                <div>
                    <h3>Contrat</h3>
                </div>
                <div class="form-mission">
                    <label for="service">Service : </label>
                    <input type="text" name="service" id="service" required />
                </div>
                <div class="form-mission">
                    <label for="duree">Durée : </label>
                    <input type="number" name="duree" id="duree" required />
                </div>
                <div class="form-mission">
                    <label for="rythme">Rythme : </label>
                    <input type="number" name="rythme" id="rythme" required />
                </div>
                <div>
                    <h3>Journées Types</h3>
                </div>
                <div class="form-mission">
                    <label for="heurePrise">Heure de Prise : </label>
                    <select name="heurePrise" id="heurePrise" required>
                        <option value="minuit">Minuit</option>
                        <option value="uneH">1H</option>
                        <option value="deuxH">2H</option>
                        <option value="troisH">3H</option>
                        <option value="quatreH">4H</option>
                        <option value="cinqH">5H</option>
                        <option value="sixH">6H</option>
                        <option value="septH">7H</option>
                        <option value="huitH">8H</option>
                        <option value="neufH">9H</option>
                        <option value="onzeH">11H</option>
                        <option value="douzeH">12H</option>
                        <option value="treizeH">13H</option>
                        <option value="quatorzeH">14H</option>
                        <option value="quinzeH">15H</option>
                        <option value="seizeH">16H</option>
                        <option value="dixseptH">17H</option>
                        <option value="dixhuitH">18H</option>
                        <option value="dixneufH">19H</option>
                        <option value="vingtH">20H</option>
                        <option value="vingtunH">21H</option>
                        <option value="vingtdeuxH">22H</option>
                        <option value="vingttroisH">23H</option>
                    </select>
                </div>
                <div class="form-mission">
                    <label for="heureFin">Heure de Fin : </label>
                    <select name="heureFin" id="heureFin" required>
                        <option value="minuit">Minuit</option>
                        <option value="uneH">1H</option>
                        <option value="deuxH">2H</option>
                        <option value="troisH">3H</option>
                        <option value="quatreH">4H</option>
                        <option value="cinqH">5H</option>
                        <option value="sixH">6H</option>
                        <option value="septH">7H</option>
                        <option value="huitH">8H</option>
                        <option value="neufH">9H</option>
                        <option value="onzeH">11H</option>
                        <option value="douzeH">12H</option>
                        <option value="treizeH">13H</option>
                        <option value="quatorzeH">14H</option>
                        <option value="quinzeH">15H</option>
                        <option value="seizeH">16H</option>
                        <option value="dixseptH">17H</option>
                        <option value="dixhuitH">18H</option>
                        <option value="dixneufH">19H</option>
                        <option value="vingtH">20H</option>
                        <option value="vingtunH">21H</option>
                        <option value="vingtdeuxH">22H</option>
                        <option value="vingttroisH">23H</option>
                    </select>
                </div>
                <br />
                <label for="mCouleur">Couleur : </label>
                <select name="mCouleur" id="mCouleur" required>
                    <option value="bleu">Bleu</option>
                    <option value="rouge">Rouge</option>
                    <option value="vert">Vert</option>
                    <option value="noir">Noir</option>
                </select>
                <div class="form-mission">
                    <input type="submit" value="Valider" />
                </div>
            </form>
        </div>
    </div>
  );
};
