// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Heading, Input, Select, Textarea, VStack, Text, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [provider, setProvider] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleProviderChange = (event) => {
    setProvider(event.target.value);
  };

  const handleApiKeyChange = (event) => {
    setApiKey(event.target.value);
  };

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    if (!provider || !apiKey || !prompt) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate API call
    setOutput(`Response from ${provider} for prompt: ${prompt}`);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          AI Playground
        </Heading>
        <Select placeholder="Select AI Model Provider" value={provider} onChange={handleProviderChange}>
          <option value="OpenAI">OpenAI</option>
          <option value="GROQ">GROQ</option>
        </Select>
        <Input placeholder="API Key" value={apiKey} onChange={handleApiKeyChange} />
        <Textarea placeholder="Enter your prompt" value={prompt} onChange={handlePromptChange} />
        <Button rightIcon={<FaPaperPlane />} colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
        {output && (
          <Box p={4} mt={4} borderWidth="1px" borderRadius="lg">
            <Text fontWeight="bold">Output:</Text>
            <Text mt={2}>{output}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
