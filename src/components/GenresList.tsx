import { Image, HStack, List, ListItem, Text, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} marginY={2}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={5}
              src={genre.image_background}
            />
            <Button variant="link">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
