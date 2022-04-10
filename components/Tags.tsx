import { Text, View } from "native-base";
import { ReactChild } from "react";

type Props = {
  bg: string;
  text: string;
  Icon: ReactChild;
};

const Tags = ({ Icon, text, bg }: Props) => {
  return (
    <View
      bg={bg}
      w="24"
      mx="4"
      display="flex"
      borderRadius={"2xl"}
      alignItems={"center"}
      flexDirection={"row"}
      p="2"
      mt="-8"
    >
      {Icon}
      <Text fontWeight={"bold"} color="white" ml="2">
        {text}
      </Text>
    </View>
  );
};

export default Tags;
