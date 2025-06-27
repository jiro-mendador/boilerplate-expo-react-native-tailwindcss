import { SafeAreaView } from "react-native-safe-area-context";
import Nav from "../components/nav";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Index = () => {
  return (
    // * this is IMPORTANT TO CONTAIN THE SCREEN AND NOT OVERLAP WITH TOP SIDE OF THE PHONE
    <SafeAreaView style={{ flex: 1 }}>
      {/* * TO BE SAFE WRAP IT AGAIN ON ANOTHER CONTAINER */}
      <View className="relative flex-1 bg-blue-50 p-4">
        <Ionicons
          name="home"
          size={20}
          className="bg-blue-100 p-4"
          color="indigo"
        />
        <Text className="text-xl font-semibold text-center m-4">
          This is the default screen/page (entry point)
        </Text>
        <Nav />
      </View>
    </SafeAreaView>
  );
};

export default Index;
