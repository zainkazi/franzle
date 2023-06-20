import { SimpleGrid } from "@chakra-ui/react";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Social Media Marketing",
      description:
        "Expand your brand's reach and engage with your target audience through our expert social media marketing services. We craft tailored strategies, create compelling content, and manage your social media campaigns to drive brand awareness, increase followers, and boost customer engagement.",
    },
    {
      id: 2,
      name: "Web Design and Development",
      description:
        "Make a lasting impression with a visually stunning and user-friendly website. Our skilled web design and development team combines creativity with technical expertise to create a captivating online presence for your business. From responsive layouts to seamless navigation, we ensure your website delivers an exceptional user experience.",
    },
    {
      id: 3,
      name: "Instagram Content Creation",
      description:
        "Harness the power of visual storytelling on Instagram with our content creation services. Our creative experts understand the platform's dynamics and craft eye-catching posts, stories, and ads that captivate your audience. We create engaging content that reflects your brand's identity, enhances your online presence, and fosters meaningful connections with your followers.",
    },
  ];

  return (
    <SimpleGrid
      marginTop="100px"
      columns={{ sm: 1, md: 3 }}
      spacing={6}
      padding={6}
    >
      {services.map((service) => (
        <Service
          key={service.id}
          id={service.id}
          name={service.name}
          description={service.description}
        />
      ))}
    </SimpleGrid>
  );
};

export default Services;
