import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store/gameQueryStore";

const GameHeading = () => {
  const { gameQuery } = useGameQueryStore();
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);
  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading fontSize="5xl">{headingText}</Heading>;
};

export default GameHeading;
