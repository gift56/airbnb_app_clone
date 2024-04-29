import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Listingdetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Listingdetail</Text>
    </View>
  );
};

export default Listingdetail;
