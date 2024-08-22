import React from "react";
import ColorMode from "../../ColorMode.jsx";
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const logoutHandler=()=>{
    
  }
  const isAuthenticated=true;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const LinkBtn = ({ url = "/", title = "Home", onclose }) => (
    <Link to={url} onClick={onclose}>
      <Button>{title}</Button>
    </Link>
  );
  return (
    <>
      <ColorMode />
      <Button
        onClick={onOpen}
        colorScheme={"yellow"}
        width="12"
        height={"12"}
        rounded="full"
        zIndex={"overlay"}
        position={"fixed"}
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Pinnacle</DrawerHeader>
          <DrawerBody>
            <VStack  spacing={'4'} alignItems="flex-start" >
              <LinkBtn
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />

              <LinkBtn
                onClose={onClose}
                url="/request"
                title="Request a course"
              />

              <LinkBtn onClose={onClose} url="/contact" title="Contact Us" />
              <LinkBtn onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={"space-evenly"}
                position="absolute"
                bottom={"2rem"}
                width="80%"
              >
                {isAuthenticated ? (<>
           <VStack>
            <HStack>
            <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme={'yellow'}>
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
            </HStack>
            <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Dashboard
                          </Button>
                        </Link>
           </VStack>

                </>):(<>
                  <Link onClick={onClose} to="/login">
                      <Button colorScheme={'yellow'}>Login</Button>
                    </Link>

                    <p>OR</p>

                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={'yellow'}>Sign Up</Button>
                    </Link>
                </>)}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
