import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);
  const headingText = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading fontSize="5xl">{headingText}</Heading>;
};

export default GameHeading;
