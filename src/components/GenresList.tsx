import { Box, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres } = useGenres();
  return (
    <Box marginX={5}>
      {genres.map((g) => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </Box>
  );
};

export default GenresList;
