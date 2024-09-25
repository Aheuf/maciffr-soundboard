import { ThemeEnum } from "@/constants/Enums"
import "../SoundButton/SoundButton.css"
type soundButtonProps = {
    titre:string
    theme: ThemeEnum
    img?:string
}

const SIZE = "5rem"

const style = {
    margin: "0.3rem",
    border: "2px solid",
    backgroundColor:"#00000000",
    borderRadius: "1rem",
    transition: "all ease 0.1s",
    boxShadow: "0px 5px 0px 0px #a29bfe",
    height:SIZE,
    width:SIZE
}

export const SoundButton = ({titre, theme, img }:soundButtonProps) => {
    function handleClick() {
        new Audio(`../assets/sounds/${titre}.mp3`).play()
    }
    return (
        <button id={titre} onClick={() => handleClick()} style={style} className={theme}>
            {img ? <img src={`../${img}`} alt={titre} height={"60rem"}/>: titre}
        </button>
)}