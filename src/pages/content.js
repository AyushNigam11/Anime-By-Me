import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    VStack,
    Stack,
    Heading,
    Input,
    Link,
    
    Image,
    Avatar,
    keyframes,
    Box,
    Divider,
    Text,
  } from "@chakra-ui/react";
  import { FaPlus } from "react-icons/fa";
  
  export default function SplitScreen() {
    const size = "96px";
    const color = "teal";
  
    const pulseRing = keyframes`
      0% {
      transform: scale(0.33);
    }
    40%,
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
      `;
    return (
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"3xl"} ml={19.9}>
              Upload Your Content Here
            </Heading>
            <Flex
              justifyContent="center"
              alignItems="center"
              h="216px"
              w="full"
              overflow="hidden"
            >
              {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
              <Box
                as="div"
                position="relative"
                w={size}
                h={size}
                _before={{
                  content: "''",
                  position: "relative",
                  display: "block",
                  width: "300%",
                  height: "300%",
                  boxSizing: "border-box",
                  marginLeft: "-100%",
                  marginTop: "-100%",
                  borderRadius: "50%",
                  bgColor: color,
                  animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                }}
              >
                <Avatar
                  src="https://i.pravatar.cc/300"
                  size="full"
                  position="absolute"
                  top={0}
                />
              </Box>
            </Flex>
            <Divider />
            <Box>
            <VStack spacing={5}>
              <HStack>
                <Text fontSize={'xl'} as='b' pr={75}> Enter Title Of Content</Text>
                <Input placeholder='Title' />
              </HStack>
              <HStack>
                <Text fontSize={'xl'} as='b' pr={15} mr={24}> Description</Text>
                <Input placeholder='Description' />
              </HStack>
              <HStack>
                <Text fontSize={'xl'} as='b' pr={20} mr={20}>Category</Text>
                <Input placeholder='Category' />
              </HStack>
              <HStack>
                <Text fontSize={'xl'} as='b' pr={20} mr={24}>Tags</Text>
                <Input placeholder='Mention Tags' />
              </HStack>
              <Button colorScheme='yellow'>Add Video...<FaPlus/></Button>
            </VStack>
            </Box>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>I Understand Content Is Mine</Checkbox>
                <Link color={"yellow.500"}>Term and Conditions</Link>
              </Stack>
              <Button colorScheme={"yellow"} variant={"solid"}>
                Upload
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    );
  }