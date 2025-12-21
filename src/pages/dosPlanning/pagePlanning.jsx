import HeaderUtilisateur from "../../communJSX/headerUtilisateur";
import BoutonRetour from "../../communJSX/boutonRetour";
import { createSignal, onMount } from "solid-js";
import "../../css/planning/stPlanning.css"

export default (props) => {

    const directionPage = () => props.setPage("pageTableauBord");

    const listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", 
        "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const changeMois = (pChoix) => {
        const divMois = document.getElementById("moisPlan");
        const divAnnee = document.getElementById("anneePlan");
        let annee = parseInt(divAnnee.innerHTML);
        let indexMois = listeMois.indexOf(divMois.innerText);
        console.log("Index Mois = " + indexMois);

        if(pChoix === "moisPrec"){
            console.log("moisPrec");
            if(indexMois === 0){
                indexMois = listeMois.length - 1;
                annee--;
                divAnnee.innerText = annee;
            }
            else{
                indexMois--;
            }
            console.log("Index Mois = " + indexMois);
            divMois.innerText = listeMois[indexMois];
        }
        
        if(pChoix === "moisSuiv"){
            console.log("moisSuiv");
            if(indexMois === listeMois.length - 1){
                indexMois = 0;
                annee++;
                divAnnee.innerText = annee;
            }
            else{
                indexMois++;
            }
            console.log("Nouveau Index Mois = " + indexMois);
            divMois.innerText = listeMois[indexMois];
        }
    }

    const multiplyNode = (node, count, deep) => {
        if (!node) return;
        for (let i = 0; i < count - 1; i++) {
        const copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
        }
    };

    // Exécuter après chargement
    onMount(() => {
        const bloc = document.getElementById("bloc");
        multiplyNode(bloc, 35, true);
    });

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <BoutonRetour onClick={directionPage} label="<---" />
        <div id="pPlanning">
            <div id="divPlanning" width="800">
                <div class="tetePlanning">
                    <button onClick={() => changeMois("moisPrec")}>&lt</button>
                    <div id="moisPlan">Décembre</div>
                    <div id="anneePlan">2025</div>
                    <button onClick={() => changeMois("moisSuiv")}>&gt</button>
                </div>
                <div class="corpsPlanning">
                    <div>Lundi</div>
                    <div>Mardi</div>
                    <div>Mercredi</div>
                    <div>Jeudi</div>
                    <div>Vendredi</div>
                    <div>Samedi</div>
                    <div>Dimanche</div>
                    <div id="bloc"></div>
                </div>
            </div>
            <button class="boutonPlan" onClick={() => props.setPage("pageAjoutMission")}>Ajouter une mission</button>
        </div>
    </div>
  );
};