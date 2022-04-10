import { Button, Image, Text, View } from "native-base";

const BannerCard = () => {
  return (
    <View
      bg="white"
      display={"flex"}
      mx="6"
      borderRadius={"2xl"}
      flexDirection="row"
      alignItems={"center"}
      p="4"
      maxH="200px"
      my="4"
      justifyContent="space-between"
    >
      <View>
        <Text fontSize={18} fontWeight="bold">
          Invite your freinds
        </Text>
        <Text>Get $2000 for ticket</Text>
        <Button my="2">INVITE</Button>
      </View>
      <Image
        resizeMode="contain"
        w="150px"
        h="150px"
        source={require("../assets/images/pic.png")}
      />
    </View>
  );
};

export default BannerCard;
