import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
import highlight from "@/assets/images/highlight.png";

interface TabIconProps {
  title: string;
  icon: ImageSourcePropType;
  focused: boolean;
}

const TabIcon = ({ title, icon, focused }: TabIconProps) => {
  if (focused)
    return (
      <ImageBackground
        source={highlight}
        className="w-full h-full flex-1 flex-row items-center justify-center min-w-[112px] min-h-16 mt-4 rounded-full overflow-hidden"
      >
        <Image source={icon} className="w-6 h-6" tintColor="#151312" />
        <Text className="text-dark-100 text-sm font-semibold ml-2">
          {title}
        </Text>
      </ImageBackground>
    );

  return (
    <View className="size-full items-center justify-center mt-4 rounded-full">
      <Image source={icon} className="size-5" tintColor="#A8B5DB" />
    </View>
  );
};

export default TabIcon;
