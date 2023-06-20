import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import StatCard from "./StatCard";

import { BsPerson } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Stats = () => {
  return (
    <Box
      marginTop="100px"
      marginBottom="150px"
      maxW="7xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
    >
      <Heading
        textAlign={"center"}
        fontSize={{ base: "2xl", sm: "4xl" }}
        py={10}
        fontWeight={"bold"}
      >
        Our company is expanding, you could be too.
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatCard
          title={"Clients Helped"}
          stat={"17"}
          icon={<BsPerson size={"3em"} />}
        />
        <StatCard
          title={"Revenue Generated"}
          stat={"$100K"}
          icon={<FiServer size={"3em"} />}
        />
        <StatCard
          title={"Services Offered"}
          stat={"3"}
          icon={<GoLocation size={"3em"} />}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Stats;
