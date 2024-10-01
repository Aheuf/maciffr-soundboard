import { View } from "react-native";
import { sounds } from "@/constants/constants";
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
        {sounds.map((sound, index) => <SoundButton  titre={sound}
                                                    key={`${sound}-${index}`}/>)}
    </View>
  );
}
