import HeaderUtilisateur from "../../communJSX/headerUtilisateur";
import BoutonRetour from "../../communJSX/boutonRetour";
import { createSignal } from "solid-js";
import "../../css/chats/stChatGeneral.css"

export default (props) => {
    
    const directionPage = () => props.setPage("pageTableauBord");

    const [textChat, setTextChat] = createSignal("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTextChat("");
    };

  return (
    <div class={props.hidden ? "hidden" : ""}>
        <HeaderUtilisateur setPage={props.setPage} userName={props.userName} />
        <BoutonRetour onClick={directionPage} label="<---" />
        <div id="pChatGeneral">
            <h1>Chat Général</h1>
            <div id="rectChat">
                <div id="boiteChat"></div>
                <div id="saisiMess">
                    <input type="text" placeholder="Écrivez un message..."
                        onInput={(e) => setTextChat(e.currentTarget.value)}
                        value={textChat()}
                    />
                    <button onclick={handleSubmit}>V</button>
                </div>
            </div>
        </div>
    </div>
  );
};
