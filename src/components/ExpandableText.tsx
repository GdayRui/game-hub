import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit: number;
}

const ExpandableText = ({ children, limit }: Props) => {
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const [expended, setExpended] = useState(false);
  const description = expended
    ? children
    : children.substring(0, limit) + "...";
  return (
    <Text>
      {description}
      <Button
        colorScheme="yellow"
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        onClick={() => setExpended((pre) => !pre)}
      >
        {expended ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
