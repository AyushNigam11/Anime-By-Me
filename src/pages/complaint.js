import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Switch,
    Link,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Complaint Form
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              forward your complaint to us 🤕
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="comp" isRequired>
                <FormLabel>Your Complaint</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="link" isRequired>
                <FormLabel>Paste Link Of Video</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="link" isRequired>
                <FormLabel>Expected Violence?</FormLabel>
                <Input type="text" />
              </FormControl>
              <Stack direction="row">
                <HStack spacing={30}>
                  <text as='b'> Want to receive notifications.</text>
                  <Switch colorScheme="orange"  />
                </HStack>
              </Stack>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"yellow.400"}
                  color={"white"}
                  _hover={{
                    bg: "yellow.500",
                  }}
                >
                  Submit
                </Button>
              </Stack>
              
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }