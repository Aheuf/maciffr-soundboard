import { View } from "react-native";
import { audios, images, sounds } from "@/constants/constants";
import { SoundButton } from "../components/SoundButton";

export function Home () {
  return (
    <View style={{
        "display":"flex",
        "flexDirection":"row",
        "flexWrap":"wrap",
        "justifyContent":"center",
        "padding":"auto"
    }}>
        {sounds.map((titre, index) => <SoundButton  audio={audios[index]}
                                                    titre={titre}
                                                    image={images[index]}
                                                    key={`${titre}-${index}`}/>)}
    </View>
  );
}
