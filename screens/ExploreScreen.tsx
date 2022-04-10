import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon, Input, ScrollView, Select, Text, View } from "native-base";
import { Feather, Ionicons } from "@expo/vector-icons";
import Tags from "../components/Tags";
import Events from "../components/Events";
import BannerCard from "../components/BannerCard";

const ExploreScreen = () => {
  const [value, setValue] = useState<string>("Kolkata,India");
  return (
    <SafeAreaView>
      <View w="full" h="full" bg="gray.100">
        <View w="full" h="200px" bg="indigo.600" borderBottomRadius={"60px"}>
          <View
            display={"flex"}
            flexDirection="row"
            alignItems={"center"}
            justifyContent="space-between"
            p="5"
          >
            <Feather name="menu" size={25} color="white" />
            <View display={"flex"} alignItems="center">
              {/** TODO: style the select component and select.item component */}
              <Select
                borderWidth={"0"}
                _item={{}}
                _selectedItem={{}}
                onValueChange={(val) => setValue(val)}
                accessibilityLabel="Choose Location ?"
                placeholder="Choose Location"
              >
                <Select.Item label="Delhi,India" value="Delhi,India" />
                <Select.Item label="Banglore,India" value="Bangalore,India" />
                <Select.Item label="Kolkata,India" value="Kolkata,India" />
              </Select>
              <Text fontSize={20} fontWeight="bold" mt="2" color="white">
                {value}
              </Text>
            </View>
            <Feather name="bell" size={25} color="white" />
          </View>
          <Input
            InputLeftElement={
              <Icon as={<Feather name="search" />} size={6} color="white" />
            }
            fontSize="2xl"
            borderWidth={0}
            placeholder="search..."
            mx="6"
            InputRightElement={
              <Icon as={<Ionicons name="filter" />} size={5} color="white" />
            }
          />
        </View>
        <View display={"flex"} flexDirection="row" zIndex={10}>
          <Tags
            bg="red.500"
            text="Sports"
            Icon={<Ionicons name="baseball" size={20} color="white" />}
          />
          <Tags
            bg="yellow.500"
            text="Sports"
            Icon={<Ionicons name="baseball" size={20} color="white" />}
          />
          <Tags
            bg="green.500"
            text="Sports"
            Icon={<Ionicons name="baseball" size={20} color="white" />}
          />
        </View>
        <View
          display={"flex"}
          flexDirection="row"
          justifyContent="space-between"
          px="5"
          py="5"
        >
          <Text fontSize={18} fontWeight="bold">
            Upcoming Events
          </Text>
          <Text color="gray.500">See all</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Events />
          <Events />
          <Events />
        </ScrollView>
        <BannerCard />
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
