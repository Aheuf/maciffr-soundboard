import { ScrollView, View } from "react-native";
import sounds from "../resources/sounds.json";
import { SoundButton } from "@/components/SoundButton";
import { ThemeEnum } from "@/constants/Enums";

export default function Index() {
  return (
    <ScrollView>
      <View style={{
        "display":"flex",
        "flexDirection":"row",
        "flexWrap":"wrap",
        "justifyContent":"center",
        "padding":"auto"
      }}>
        {sounds.map((sound, index) => <SoundButton appIsPlaying={false} play={() => {}} theme={ThemeEnum.DARK} titre={sound.nom} key={`${sound.nom}-${index}`}/>)}
      </View>
    </ScrollView>
  );
}
