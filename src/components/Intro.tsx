import { Box, Heading, Text } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box textAlign="center" padding="50px">
      <Heading
        color="#799cd1"
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        marginBottom="30px"
      >
        What we do
      </Heading>
      <Text fontSize={{ base: "sm", md: "xl" }} color={"gray.400"}>
        Welcome to Franzle, your comprehensive solution for digital marketing
        success. With expertise in social media marketing, web design and
        development, and Instagram content creation, we are dedicated to
        propelling your brand forward in today's digital landscape. Our talented
        team crafts engaging social media strategies, builds visually stunning
        websites, and creates captivating Instagram content to drive your
        brand's growth and generate meaningful connections with your audience.
        Let us unlock the full potential of digital marketing for your business
        and shape your success in the online world. Contact us today and take
        your brand to new heights.
      </Text>
    </Box>
  );
};

export default Intro;
