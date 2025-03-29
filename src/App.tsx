import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/usePlatforms";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  page: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    page: 1,
  } as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={5}>
          <GenresList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={5}>
        <Box marginBottom={2}>
          <GameHeading gameQuery={gameQuery} />
        </Box>
        <HStack spacing={3}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            platform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
        <HStack spacing={3} marginTop={5}>
          <Button
            disabled={gameQuery.page === 1}
            onClick={() =>
              setGameQuery({ ...gameQuery, page: gameQuery.page - 1 })
            }
            colorScheme="blue"
          >
            Pre
          </Button>
          <Button
            onClick={() =>
              setGameQuery({ ...gameQuery, page: gameQuery.page + 1 })
            }
            colorScheme="blue"
          >
            Next
          </Button>
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default App;
