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
    Textarea,
    Heading,
    Text,
    Divider,
    Slider,
    SliderTrack,
    PinInput,
    PinInputField,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    SliderFilledTrack,
    SliderThumb,
    Switch,
    SliderMark,
    useColorModeValue,
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
              Settings
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Customize Your App According To You ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Text as="b" fontSize="2xl">
                Appearance
              </Text>
              <Divider />
              <HStack>
                <Text as="b" fontSize="1xl">
                  Brightness
                </Text>
                <Box px={6} width={300}>
                  <Slider
                    aria-label="slider-ex-1"
                    colorScheme="yellow"
                    defaultValue={30}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Box>
              </HStack>
              <HStack>
                <Text as="b" fontSize="1xl">
                  Theme
                </Text>
                <Box px={14} width={300}>
                  <Stack direction="row">
                    <Switch colorScheme="yellow" />
                  </Stack>
                </Box>
              </HStack>
              <Text as="b" fontSize="2xl">
                Volume
              </Text>
              <Divider />
              <HStack>
                <Slider aria-label="slider-ex-4" defaultValue={30}>
                  <SliderTrack bg="blue.100">
                    <SliderFilledTrack bg="tomato" />
                  </SliderTrack>
                  <SliderThumb boxSize={6}>
                    <Box color="tomato" />
                  </SliderThumb>
                </Slider>
              </HStack>
              <Text as="b" fontSize="2xl">
                Account Settings
              </Text>
              <Divider />
              <HStack>
                <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
                  <FormLabel htmlFor="isChecked">Two-Factor</FormLabel>
                  <Switch colorScheme="yellow" />
  
                  <FormLabel htmlFor="isDisabled">Activity Status</FormLabel>
                  <Switch colorScheme="yellow" />
  
                  <FormLabel htmlFor="isFocusable">Data Saver</FormLabel>
                  <Switch colorScheme="yellow" />
  
                  <FormLabel htmlFor="isInvalid">On Mode</FormLabel>
                  <Switch colorScheme="yellow" />
  
                  <FormLabel htmlFor="isReadOnly">Security</FormLabel>
                  <Switch colorScheme="yellow" />
  
                  <FormLabel htmlFor="isRequired">Notification</FormLabel>
                  <Switch colorScheme="yellow" />
                </FormControl>
              </HStack>
              <Text as="b" fontSize="2xl">
                Privacy Settings
              </Text>
              <Divider />
              <HStack>
                <Text as="b" fontSize="1xl">
                  Private Account
                </Text>
                <Stack direction="row">
                  <Switch colorScheme="yellow" />
                </Stack>
              </HStack>
              <HStack>
                <Text as="b" fontSize="1xl">
                  Save History
                </Text>
                <Stack direction="row">
                  <Switch colorScheme="yellow" />
                </Stack>
              </HStack>
              <HStack>
                <Text as="b" fontSize="1xl">
                  Blocked Accounts
                </Text>
                <HStack px={25}>
                  <PinInput placeholder="😇">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </HStack>
              <HStack>
                <Text as="b" fontSize="1xl">
                  Restricted Accounts
                </Text>
                <HStack px={2}>
                  <PinInput placeholder="😇">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </HStack>
              <Text as="b" fontSize="2xl">
                Insights
              </Text>
              <Divider />
              <HStack>
                <StatGroup px={0}>
                  <Stat>
                    <StatLabel>Follows</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      23.36%
                    </StatHelpText>
                  </Stat>
  
                  <Stat px={10}>
                    <StatLabel>Unfollows</StatLabel>
                    <StatNumber>45</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      9.05%
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </HStack>
              <Text as="b" fontSize="2xl">
                Suggest Settings Feedback
              </Text>
              <Divider />
              <HStack>
                <Textarea placeholder="Enter Your Feedback" />
              </HStack>
             
  
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"yellow.500"}
                  color={"white"}
                  _hover={{
                    bg: "yellow.800",
                    
                  }}
                >
                  Apply Changes
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Reset To <Link color={"blue.400"}>Default</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }