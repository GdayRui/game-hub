import { Heading, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" size="md" color="gray.500">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
