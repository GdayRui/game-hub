import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store/gameQueryStore";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const { gameQuery, setSortOrder } = useGameQueryStore();
  const selectedSortOrder = sortOrders.find(
    (s) => s.value === gameQuery.sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((s) => (
          <MenuItem key={s.value} onClick={() => setSortOrder(s.value)}>
            {s.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
