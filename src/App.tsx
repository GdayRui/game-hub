import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  sortOrder: string;
  searchText: string;
  genreId?: number;
  platformId?: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={5}>
        <Box marginBottom={2}>
          <GameHeading gameQuery={gameQuery} />
        </Box>
        <HStack spacing={3}>
          <PlatformSelector
            onSelectPlatform={(platformId) =>
              setGameQuery({ ...gameQuery, platformId })
            }
            selectedPlatformId={gameQuery.platformId}
          />
          <SortSelector
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
