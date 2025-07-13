import { Text, View } from "react-native";

interface MovieInfoProps {
  label: string;
  value: string | number | undefined;
}

const MovieInfo = ({ label, value }: MovieInfoProps) => {
  return (
    <View className="items-start gap-1 mt-5">
      <Text className="text-light-200 text-sm font-bold">{label}</Text>
      <Text className="text-light-100 text-sm">{value || "N/A"}</Text>
    </View>
  );
};

export default MovieInfo;
