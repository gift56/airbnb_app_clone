import { useAuth } from "@clerk/clerk-expo";
import { View, Text, Button } from "react-native";

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="Log Out" onPress={() => signOut()} />
    </View>
  );
};

export default Profile;
