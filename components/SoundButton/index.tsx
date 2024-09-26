import { Format, ThemeEnum } from "@/constants/Enums"
import "../SoundButton/SoundButton.css"
import { PATH } from "@/constants/constants"

type soundButtonProps = {
    titre:string
    theme: ThemeEnum
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

export const SoundButton = ({titre, theme }:soundButtonProps) => {
    function handleClick() {
        new Audio(`${PATH.ASSET_SOUND}${titre}${Format.MP3}`).play()
    }
    return (
        <button id={titre} onClick={() => handleClick()} style={style} className={theme}>
            <img src={`${PATH.ASSET_IMG}${titre}${Format.PNG}`} alt={titre} height={"60rem"}/>
        </button>
)}