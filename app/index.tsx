import { ScrollView, View } from "react-native";
import { SoundButton } from "@/components/SoundButton";
import { ThemeEnum } from "@/constants/Enums";
import { sounds } from "@/constants/constants";

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
        {sounds.map((sound, index) => <SoundButton  theme={ThemeEnum.DARK}
                                                    titre={sound}
                                                    key={`${sound}-${index}`}/>)}
      </View>
    </ScrollView>
  );
}
