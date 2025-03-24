import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletion = () => {
  return (
    <Card width="300px">
      <Skeleton height="250px" borderRadius="10px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletion;
