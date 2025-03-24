import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeletion = () => {
  return (
    <Card>
      <Skeleton height="250px" />
      <CardBody>
        <SkeletonText skeletonHeight="2" noOfLines={4} spacing={2} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeletion;
