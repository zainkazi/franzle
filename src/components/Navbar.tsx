import { HStack, Link } from "@chakra-ui/react";

export const navlinks = [
  {
    id: 1,
    name: "Marketing",
  },
  {
    id: 2,
    name: "Web Design",
  },
  {
    id: 3,
    name: "Content Creation",
  },
  {
    id: 4,
    name: "About",
  },
];
const Navbar = () => {
  return (
    <HStack display={{ base: "none", md: "flex" }} gap={10}>
      {navlinks.map((navlink) => (
        <Link
          _hover={{ color: "#5377ad" }}
          fontWeight="semibold"
          key={navlink.id}
        >
          {navlink.name}
        </Link>
      ))}
    </HStack>
  );
};

export default Navbar;
