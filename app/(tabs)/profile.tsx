import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="Log Out" onPress={() => signOut()} />
      {!isSignedIn && <Link href={"/(modals)/login"}>Login</Link>}
    </View>
  );
};

export default Profile;
