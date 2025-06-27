import { Link } from "expo-router";
import { ScrollView, View } from "react-native";
import CustomButton from "./customButton";

const Nav = () => {
  return (
    <View className="bg-violet-100 absolute bottom-5 left-5 right-5 rounded-full px-4">
      <ScrollView
        className="rounded-full"
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerClassName="p-4 gap-4"
      >
        <Link href="/" asChild>
          <CustomButton label="root default" />
        </Link>
        <Link href="/sample-screen" asChild>
          <CustomButton label="root second" />
        </Link>
        <Link href="/sample-section" asChild>
          <CustomButton label="/section/default" />
        </Link>
        <Link href="/sample-section/sample-section-screen" asChild>
          <CustomButton label="/section/screen" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default Nav;
