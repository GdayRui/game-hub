import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <CriticScore score={game.metacritic} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
