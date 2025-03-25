import { Box, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <Box marginX={5}>
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </Box>
  );
};

export default GenresList;
