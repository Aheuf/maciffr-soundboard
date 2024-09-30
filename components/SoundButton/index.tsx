import { Format } from "@/constants/Enums"
import { PATH } from "@/constants/constants"
import { Image } from 'expo-image';
import { TouchableOpacity, StyleSheet } from "react-native"

type soundButtonProps = {
    titre:string
}

const SIZE = 60

export const SoundButton = ({titre }:soundButtonProps) => {

    function handleClick() {
        new Audio(`${PATH.ASSET_SOUND}${titre}${Format.MP3}`).play();
    }

    return (
        <TouchableOpacity onPress={handleClick} style={style.button}>
            <Image source={`${PATH.ASSET_IMG}${titre}${Format.PNG}`} alt={titre} style={style.img}/>
        </TouchableOpacity>
)};

const style = StyleSheet.create({
    button: {        
        margin: 5,
        borderWidth: 2,
        backgroundColor:"#00000000",
        borderRadius: 5,
        shadowColor:"#a29bfe",
        height:SIZE,
        width:SIZE,
    
    },
    img: {
        alignSelf:"center",
        marginVertical:"auto",
        height:SIZE-10,
        width:SIZE-10
    }
})
