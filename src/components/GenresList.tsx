import {
  Image,
  HStack,
  List,
  ListItem,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="3xl">Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginY={3}>
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={5}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre.id)}
                variant="link"
                fontSize="xl"
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
