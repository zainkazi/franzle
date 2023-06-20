import { CloseIcon, HamburgerIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Image,
  Link,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import Navbar, { navlinks } from "./Navbar";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack
        bg={useColorModeValue("gray.100", "gray.900")}
        justifyContent="space-between"
        paddingX={4}
        paddingY={2}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Image src={logo} width={{ base: "100px", md: "120px" }} />
        <Navbar />
        <Link href="#contact-form">
          <Button
            colorScheme="brand"
            rightIcon={<PhoneIcon />}
            size={{ base: "sm", md: "md" }}
          >
            Contact
          </Button>
        </Link>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" color="#799cd1">
              Quick Links
            </DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody marginTop={5}>
              <VStack alignItems="flex-start" gap={5}>
                {navlinks.map((navlink) => (
                  <Link
                    _hover={{ color: "#5377ad" }}
                    fontWeight="semibold"
                    key={navlink.id}
                  >
                    {navlink.name}
                  </Link>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};

export default Header;
