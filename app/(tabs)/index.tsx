import ExploreHeader from "@/components/ExploreHeader";
import { Stack } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

const Homepage = () => {
  const [category, setCategory] = useState<string>('Tiny homes');

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
    </View>
  );
};

export default Homepage;
