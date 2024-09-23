import { View } from "react-native";
import sounds from "../resources/sounds.json";
import { SoundButton } from "@/components/SoundButton";
import { ThemeEnum } from "@/constants/Enums";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {sounds.map((sound, index) => <SoundButton appIsPlaying={false} play={() => {}} theme={ThemeEnum.DARK} titre="" key={`${sound.nom}-${index}`}/>)}
    </View>
  );
}
