import ExploreHeader from "@/components/ExploreHeader";
import { Stack } from "expo-router";
import { View } from "react-native";

const Homepage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={() => {}} />,
        }}
      />
    </View>
  );
};

export default Homepage;
