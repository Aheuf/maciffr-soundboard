import { Format } from "@/constants/Enums";
import { Image } from 'expo-image';
import { TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from 'expo-av';

type soundButtonProps = {
    audio:any
    image:any
    titre:string
}

const SIZE = 60

export const SoundButton = ({ audio, image, titre }:soundButtonProps) => {

    async function handleClick() {
        const { sound } = await Audio.Sound.createAsync(audio);
        await sound.playAsync();
    }

    return (
        <TouchableOpacity onPress={handleClick} style={style.button}>
            <Image source={image} alt={titre} style={style.img}/>
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
