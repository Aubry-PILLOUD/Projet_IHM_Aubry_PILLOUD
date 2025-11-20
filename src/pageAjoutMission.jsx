import HeaderUtilisateur from "./headerUtilisateur";
import { createSignal } from "solid-js";
import "./css/stAjoutMission.css"

export default (props) => {
  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur />
        <div id="pAjoutMission">
            <h1>Ajout de Mission</h1>
            <form class="form-mission">
                <div class="formMission">
                    <span class="labelText">Nom de la Mission</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="nomMision" id="nomMision" required />
                </div>
                <div>
                    <h3>Lieu de Travail</h3>
                </div>
                <div class="formMission">
                    <span class="labelText">Structure</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="structure" id="structure" required />
                </div>
                <div class="formMission">
                    <span class="labelText">Ville</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="ville" id="ville" required />
                </div>
                <div>
                    <h3>Contrat</h3>
                </div>
                <div class="formMission">
                    <span class="labelText">Service</span>
                    <span class="doublePoints">:</span>
                    <input type="text" name="service" id="service" required />
                </div>
                <div class="formMission">
                    <span class="labelText">Durée</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="duree" id="duree" required />
                </div>
                <div class="formMission">
                    <span class="labelText">Rythme</span>
                    <span class="doublePoints">:</span>
                    <input type="number" name="rythme" id="rythme" required />
                </div>
                <div>
                    <h3>Journées Types</h3>
                </div>
                <div class="formMission">
                    <span class="labelText">Heure de Prise</span>
                    <span class="doublePoints">:</span>
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
                <div class="formMission">
                    <span class="labelText">Heure de Fin</span>
                    <span class="doublePoints">:</span>
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
                <div class="formMission">
                    <span class="labelText">Couleur</span>
                    <span class="doublePoints">:</span>
                    <select name="mCouleur" id="mCouleur" required>
                        <option value="bleu">Bleu</option>
                        <option value="rouge">Rouge</option>
                        <option value="vert">Vert</option>
                        <option value="noir">Noir</option>
                    </select>
                </div>
                <div class="boutonValid">
                    <input type="submit" value="Valider" />
                </div>
                </form>
        </div>
    </div>
  );
};
