import { Entypo } from "@expo/vector-icons";
import { Avatar, Image, Text, View } from "native-base";

const Events = () => {
  return (
    <View maxW="250px" mx="4" bg="white" shadow={"2"} p="4" borderRadius={"xl"}>
      <Image
        w="full"
        h="150px"
        borderRadius={"2xl"}
        resizeMode="cover"
        source={{
          uri: "https://images.pexels.com/photos/11062038/pexels-photo-11062038.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
      />
      <Text py="2" fontSize="18" fontWeight={"bold"} isTruncated>
        International Brand Something Something
      </Text>
      <View
        display={"flex"}
        flexDirection="row"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <View display={"flex"} flexDirection="row">
          <Avatar
            size={"8"}
            source={{ uri: "https://i.pravatar.cc/150?img=48" }}
          />
          <Avatar
            size={"8"}
            source={{ uri: "https://i.pravatar.cc/150?img=49" }}
          />
          <Avatar
            size={"8"}
            source={{ uri: "https://i.pravatar.cc/150?img=47" }}
          />
        </View>
        <Text>20+ going</Text>
      </View>
      <View display={"flex"} alignItems="center" flexDirection="row">
        <Entypo name="location-pin" size={16} color="gray.300" />
        <Text color="gray.700">Little Havana, ku,1561</Text>
      </View>
    </View>
  );
};

export default Events;
