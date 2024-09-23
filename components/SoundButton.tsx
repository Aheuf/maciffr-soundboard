import { ThemeEnum } from "@/constants/Enums"
import { useState } from "react"

type soundButtonProps = {
    titre:string
    theme: ThemeEnum
    appIsPlaying: boolean
    play: (titre:string) => void
}

const style = {
    border: "2px solid",
    backgroundColor:"#00000000",
    borderRadius: "1rem",
    height:"5rem",
    width:"5rem"
}

export const SoundButton = ({titre, theme, appIsPlaying, play}:soundButtonProps) => 
    <button id={titre} onClick={() => play(titre)} style={style} className={theme} disabled={appIsPlaying}>{titre}</button>
