import { Image, ImageSourcePropType, Text, View } from "react-native";
import theme from "@/constants/theme";

interface TabIconProps {
  title: string;
  icon: ImageSourcePropType;
  focused: boolean;
}

const TabIcon = ({ title, icon, focused }: TabIconProps) => {
  const containerClasses = `size-full items-center justify-center mt-2 rounded-full flex-row mt-2 overflow-hidden ${
    focused ? "bg-light-100 min-w-28 min-h-14" : ""
  }`;
  return (
    <View className={containerClasses}>
      <Image
        source={icon}
        className="size-5"
        tintColor={focused ? theme.colors.secondary : theme.colors.light.l200}
      />
      {focused && (
        <Text className="text-dark-100 text-sm font-semibold ml-2">
          {title}
        </Text>
      )}
    </View>
  );
};

export default TabIcon;
