import HeaderUtilisateur from "../../communJSX/headerUtilisateur";
import BoutonRetour from "../../communJSX/boutonRetour";
import { For } from "solid-js";
import "../../css/chats/stListeChatsPrivés.css"

export default (props) => {
    
    const directionPage = () => props.setPage("pageTableauBord");

    const listeChats = [
        "Chat Privé 1",
        "Chat Privé 2",
        "Chat Privé 3",
    ];

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <BoutonRetour onClick={directionPage} label="<---" />
        <div id="pListChats">
            <h1>Chats Privés</h1>
            <div id="listChats">
                <For each={listeChats}>
                    {(chat) => (
                    <div class="sousChat">
                        <div class="nomChat">{chat()}</div>
                        <div class="nbMembres">Membres : X</div>
                    </div>
                    )}
                </For>
            </div>
        </div>
    </div>
  );
};
