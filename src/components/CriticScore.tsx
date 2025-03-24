import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  let color = score > 75 ? "green" : "yellow";
  return (
    <Badge
      colorScheme={color}
      fontSize={16}
      marginY={2}
      paddingX={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
