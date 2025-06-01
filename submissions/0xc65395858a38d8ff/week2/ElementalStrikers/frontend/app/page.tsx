'use client';

import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Container, 
  SimpleGrid, 
  Icon, 
  Link,
  Button,
  Flex,
  Badge,
  HStack,
  Image
} from '@chakra-ui/react';
import { 
  FiZap, 
  FiShield, 
  FiWind, 
  FiDroplet, 
  FiSun, 
  FiGitBranch,
  FiAward,
  FiTrendingUp,
  FiPlay
} from 'react-icons/fi';

export default function HomePage() {
  // Color scheme for the three elements
  const elementColors = {
    fuego: "red.500",
    agua: "blue.500",
    planta: "green.500"
  };

  const Feature = ({ title, text, icon, accentColor = "teal.500" }: { 
    title: string; 
    text: string; 
    icon: React.ElementType;
    accentColor?: string;
  }) => {
    return (
      <Box 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden"
        borderColor="gray.200"
        _hover={{ 
          transform: 'translateY(-5px)', 
          shadow: 'lg', 
          borderColor: accentColor 
        }}
        transition="all 0.3s ease"
        role="group"
      >
        <Box bg={accentColor} color="white" p={4}>
          <Flex align="center">
            <Icon 
              as={icon} 
              w={8} 
              h={8} 
              mr={3} 
              transition="transform 0.3s ease" 
              _groupHover={{ 
                transform: 'scale(1.2)',
              }}
            />
            <Heading size="md">{title}</Heading>
          </Flex>
        </Box>
        <Box p={4} bg="white">
          <Text color="gray.800">{text}</Text>
        </Box>
      </Box>
    );
  };

  const ElementCard = ({ element, color, icon, strengths, weaknesses }: { 
    element: string; 
    color: string;
    icon: React.ElementType;
    strengths: string;
    weaknesses: string;
  }) => {
    return (
      <Box 
        borderWidth="1px" 
        borderRadius="lg" 
        overflow="hidden"
        bg="white"
        _hover={{ transform: 'scale(1.05)', shadow: 'xl' }}
        transition="all 0.3s ease"
      >
        <Box p={4} bg={color} color="white" textAlign="center">
          <Icon as={icon} w={12} h={12} />
          <Heading size="lg" mt={2}>{element}</Heading>
        </Box>
        <Box p={4}>
          <Box mb={3}>
            <Text fontWeight="bold" color="gray.800">Strong against:</Text>
            <Text color="gray.800">{strengths}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold" color="gray.800">Weak against:</Text>
            <Text color="gray.800">{weaknesses}</Text>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      {/* Hero Section with Background */}
      <Box 
        bg="gray.800"
        color="white" 
        py={20} 
        position="relative"
        overflow="hidden"
      >
        {/* Contenedor centrado para la imagen giratoria */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {/* Spinning Spiral Image */}
          <Image
            src="/assets/icons/lorc/spiral-tentacle.png"
            alt="Spinning Spiral Background"
            width="160%"
            height="160%"
            objectFit="contain"
            className="spinning-image"
          />
        </Box>
        {/* Gradient Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage="linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))"
          zIndex="1"
        />
        {/* Content Container - ensure it's on top */}
        <Container maxW="container.xl" position="relative" zIndex="2">
          <VStack gap={8} textAlign="center">
            <Badge colorScheme="green" p={2} fontSize="md">Week 2 Challenge</Badge>
            <Heading as="h1" size="2xl" fontWeight="bold">
              ElementalStrikers
            </Heading>
            <Text fontSize="xl">
              A strategic elemental battle game built on the Flow blockchain
            </Text>
            <HStack gap={4}>
              <Link href="/pve">
                <Button 
                  colorScheme="teal" 
                  size="lg"
                  _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                  transition="all 0.2s ease"
                >
                  <Flex align="center">
                    <Box as={FiPlay} mr={2} />
                    Play PvE
                  </Flex>
                </Button>
              </Link>
              <Link href="/pvp">
                <Button 
                  colorScheme="purple" 
                  size="lg"
                  _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                  transition="all 0.2s ease"
                >
                  <Flex align="center">
                    <Box as={FiPlay} mr={2} />
                    Play PvP
                  </Flex>
                </Button>
              </Link>
              <Button 
                variant="outline" 
                colorScheme="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                View Tutorial
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={16}>
        {/* About Section */}
        <Box textAlign="center" mb={16}>
          <Heading size="xl" mb={6}>About ElementalStrikers</Heading>
          <Text fontSize="lg" color="gray.700" maxW="3xl" mx="auto">
            ElementalStrikers is a decentralized game where players engage in strategic elemental battles. 
            Inspired by classic rock-paper-scissors mechanics but with a creative twist, players choose an element 
            (Fire, Water, or Plant) and stake Flow tokens to participate. The game leverages Flow&apos;s on-chain randomness 
            to introduce exciting unpredictable factors like environmental modifiers and critical hit chances.
          </Text>
        </Box>

        {/* Stats Section */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} mb={16}>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text color="gray.600">Week 1 Winner</Text>
            <Heading size="md">Randomness Revolution</Heading>
            <Flex align="center" mt={2}>
              <Box as={FiAward} color="gold" />
              <Text ml={1}>Recognized by Flow</Text>
            </Flex>
          </Box>
          
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text color="gray.600">Week 2</Text>
            <Heading size="md">Actually Fun Games</Heading>
            <Flex align="center" mt={2}>
              <Box as={FiTrendingUp} color="green" />
              <Text ml={1}>In Active Development</Text>
            </Flex>
          </Box>
          
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text color="gray.600">Blockchain</Text>
            <Heading size="md">Flow</Heading>
            <Flex align="center" mt={2}>
              <Box as={FiShield} color="blue" />
              <Text ml={1}>Fast and Secure</Text>
            </Flex>
          </Box>
        </SimpleGrid>

        {/* Elements Section */}
        <Heading textAlign="center" size="lg" mb={8}>The Elements</Heading>
        
        {/* Triangular arrangement - Creative interactive version */}
        <Box position="relative" height="600px" mb={16}>
          {/* Central emblem */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="150px"
            height="150px"
            borderRadius="full"
            bgGradient="radial(gray.700, gray.900)"
            border="3px solid"
            borderColor="gray.500"
            display="flex"
            alignItems="center"
            justifyContent="center"
            zIndex={1}
            boxShadow="0 0 30px rgba(0,0,0,0.5)"
          >
            <Text
              fontSize="xl"
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Elemental<br/>Triangle
            </Text>
          </Box>
          
          {/* Fire element - top */}
          <Box 
            position="absolute" 
            top="0" 
            left="50%" 
            transform="translateX(-50%)" 
            width="250px"
            _hover={{
              transform: "translateX(-50%) translateY(-10px)",
              transition: "transform 0.3s ease"
            }}
            transition="all 0.3s ease"
            zIndex={2}
          >
            <ElementCard 
              element="Fire" 
              color={elementColors.fuego}
              icon={FiZap}
              strengths="Plant"
              weaknesses="Water"
            />
          </Box>
          
          {/* Water element - bottom left */}
          <Box 
            position="absolute" 
            bottom="50px" 
            left="10%" 
            width="250px"
            _hover={{
              transform: "translateY(-10px)",
              transition: "transform 0.3s ease"
            }}
            transition="all 0.3s ease"
            zIndex={2}
          >
            <ElementCard 
              element="Water" 
              color={elementColors.agua}
              icon={FiDroplet}
              strengths="Fire"
              weaknesses="Plant"
            />
          </Box>
          
          {/* Plant element - bottom right */}
          <Box 
            position="absolute" 
            bottom="50px" 
            right="10%" 
            width="250px"
            _hover={{
              transform: "translateY(-10px)",
              transition: "transform 0.3s ease"
            }}
            transition="all 0.3s ease"
            zIndex={2}
          >
            <ElementCard 
              element="Plant" 
              color={elementColors.planta}
              icon={FiSun}
              strengths="Water"
              weaknesses="Fire"
            />
          </Box>
          
          {/* Element relation indicators */}
          <Box position="absolute" top="42%" left="67%" transform="rotate(30deg)" zIndex={1}>
            <Badge colorScheme="red" p={2} fontSize="sm" borderRadius="full">Defeats</Badge>
          </Box>
          
          <Box position="absolute" bottom="37%" left="50%" transform="translateX(-50%)" zIndex={1}>
            <Badge colorScheme="green" p={2} fontSize="sm" borderRadius="full">Defeats</Badge>
          </Box>
          
          <Box position="absolute" top="42%" left="33%" transform="rotate(-30deg)" zIndex={1}>
            <Badge colorScheme="blue" p={2} fontSize="sm" borderRadius="full">Defeats</Badge>
          </Box>
          
          {/* Connecting energy lines */}
          <svg 
            width="100%" 
            height="100%" 
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Decorative Circle */}
            <circle cx="50" cy="50" r="35" fill="none" stroke="#333" strokeWidth="0.5" strokeDasharray="1,1" />
            
            {/* Fire to Plant Line (Fire beats Plant) */}
            <path 
              d="M50,20 Q65,40 75,80" 
              fill="none"
              stroke={elementColors.fuego} 
              strokeWidth="2" 
              strokeDasharray="5,3"
            />
            
            {/* Plant to Water Line (Plant beats Water) */}
            <path 
              d="M75,80 Q60,85 25,80" 
              fill="none"
              stroke={elementColors.planta} 
              strokeWidth="2" 
              strokeDasharray="5,3"
            />
            
            {/* Water to Fire Line (Water beats Fire) */}
            <path 
              d="M25,80 Q40,40 50,20" 
              fill="none"
              stroke={elementColors.agua} 
              strokeWidth="2" 
              strokeDasharray="5,3"
            />
            
            {/* Decorative Element Symbols */}
            <circle cx="50" cy="20" r="2" fill={elementColors.fuego} opacity="0.8" />
            <circle cx="75" cy="80" r="2" fill={elementColors.planta} opacity="0.8" />
            <circle cx="25" cy="80" r="2" fill={elementColors.agua} opacity="0.8" />
          </svg>
        </Box>

        {/* Features Section */}
        <Heading textAlign="center" size="lg" mb={8}>Week 2 Features</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} mb={16}>
          <Feature
            icon={FiZap}
            title="Elemental Triangle"
            text="Fire beats Plant, Plant beats Water, and Water beats Fire. Choose your element wisely based on strategy and prediction."
            accentColor={elementColors.fuego}
          />
          <Feature
            icon={FiShield}
            title="Stake to Play"
            text="Stake your Flow tokens to join battles. Our expanded staking system in Week 2 offers multiple tiers with different risk/reward profiles."
            accentColor={elementColors.agua}
          />
          <Feature
            icon={FiGitBranch}
            title="Powered by Flow"
            text="Built on the Flow blockchain, utilizing on-chain randomness for unpredictable and fair game outcomes."
            accentColor="purple.500"
          />
          <Feature
            icon={FiDroplet}
            title="Random Modifiers"
            text="Environmental effects like &apos;Sunny Day&apos; boost Fire, &apos;Rainfall&apos; enhances Water. These modifiers can turn losses into draws or amplify winnings."
            accentColor={elementColors.agua}
          />
          <Feature
            icon={FiSun}
            title="Week 2: PVE Battles"
            text="New in Week 2! Challenge AI opponents in multi-turn PVE battles with progressive difficulty and unique elemental strategies."
            accentColor={elementColors.planta}
          />
          <Feature
            icon={FiWind}
            title="Multi-turn Strategy"
            text="New in Week 2! Engage in extended battles where elemental choices, timing, and adaptation to changing conditions determine victory."
            accentColor="cyan.500"
          />
        </SimpleGrid>

        {/* How to Play Section */}
        <Box mb={16}>
          <Heading textAlign="center" size="lg" mb={8}>How to Play</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
            <VStack align="start" gap={6}>
              <Box>
                <Heading size="md" mb={2}>1. Connect Your Wallet</Heading>
                <Text>Connect your Flow wallet using the button in the header to get started.</Text>
              </Box>
              <Box>
                <Heading size="md" mb={2}>2. Choose a Stake</Heading>
                <Text>Select how many Flow tokens you want to stake in the battle.</Text>
              </Box>
              <Box>
                <Heading size="md" mb={2}>3. Select Your Element</Heading>
                <Text>Strategically choose between Fire, Water, or Plant based on your prediction.</Text>
              </Box>
              <Box>
                <Heading size="md" mb={2}>4. Battle</Heading>
                <Text>Watch the battle unfold with random effects and environmental modifiers!</Text>
              </Box>
            </VStack>
            <Box 
              borderWidth="1px" 
              borderRadius="lg" 
              overflow="hidden"
              p={6}
              bg="gray.50"
              position="relative"
            >
              <Heading size="md" mb={4}>Battle Example:</Heading>
              <VStack align="start" gap={4}>
                <Box p={3} bg="blue.100" borderRadius="md" w="100%">
                  <Text fontWeight="bold" color="gray.800">Round 1:</Text>
                  <Text color="gray.800">Player chooses Water vs. AI chooses Fire</Text>
                  <Badge colorScheme="green">Player Wins!</Badge>
                </Box>
                <Box p={3} bg="blue.100" borderRadius="md" w="100%">
                  <Text fontWeight="bold" color="gray.800">Environmental Modifier:</Text>
                  <Text color="gray.800">&apos;Sunny Day&apos; appears! Fire gets +20% power</Text>
                </Box>
                <Box p={3} bg="blue.100" borderRadius="md" w="100%">
                  <Text fontWeight="bold" color="gray.800">Round 2:</Text>
                  <Text color="gray.800">Player chooses Plant vs. AI chooses Fire</Text>
                  <Badge colorScheme="red">Player Loses (buffed by Sunny Day)</Badge>
                </Box>
                <Box p={3} bg="blue.100" borderRadius="md" w="100%">
                  <Text fontWeight="bold" color="gray.800">Round 3:</Text>
                  <Text color="gray.800">Player chooses Water vs. AI chooses Plant</Text>
                  <Badge colorScheme="red">Player Loses</Badge>
                </Box>
                <Box p={3} bg="green.100" borderRadius="md" w="100%">
                  <Text fontWeight="bold" color="gray.800">Final Result:</Text>
                  <Text color="gray.800">AI wins 2-1</Text>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Call to Action */}
        <Box 
          textAlign="center" 
          mt={10} 
          p={8} 
          borderRadius="lg" 
          bg="gray.50"
          borderWidth="1px"
        >
          <Heading size="lg" mb={4}>May The Flow Be With You Challenge</Heading>
          <Text fontSize="md" mb={4} color="gray.700">
            ElementalStrikers was a Week 1 winner in the &apos;Randomness Revolution&apos; category.
            We are now expanding for Week 2: &apos;Actually Fun Games&apos; with new PVE battles, 
            multi-turn mechanics, and an enhanced staking system.
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={4} color="gray.800">
            Ready to strike? Connect your Flow wallet via the header to begin your elemental journey!
          </Text>
          <Button 
            colorScheme="teal" 
            size="lg"
            _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
            transition="all 0.2s ease"
          >
            <Flex align="center">
              <Box as={FiPlay} mr={2} />
              Play Now
            </Flex>
          </Button>
          <Box as="hr" my={6} borderColor="gray.200" />
          <Link href="https://flow.com/" target="_blank" rel="noopener noreferrer" color="teal.600" fontWeight="bold" display="inline-block">
            Learn more about Flow Blockchain
          </Link>
        </Box>
      </Container>
    </Box>
  );
} 