import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

interface Props {
  id: number;
  name: string;
  description: string;
}

const Service = ({ name, description }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading color="#799cd1">{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <HStack>
          <Button colorScheme="brand">Buy Now</Button>
          <Button colorScheme="brand" variant="outline">
            Read More
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default Service;
