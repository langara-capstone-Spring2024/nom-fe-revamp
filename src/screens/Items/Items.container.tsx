import ItemsView from "./Items.view";
import { useState } from "react";
import { GetMenu } from "../../services/react-query/queries/menu";

const Items = () => {
  const {
    data: allMenu,
    status: allMenuStatus,
    error: allMenuError,
  } = GetMenu();

  const [selectedMenuIds, setSelectedMenuIds] = useState<string[]>([]);

  const handleSelectMenu = (menuId: string) => {
    const isSelected = selectedMenuIds?.includes(menuId);

    if (isSelected) {
      setSelectedMenuIds((menuIds) => menuIds.filter((id) => id !== menuId));
    } else {
      setSelectedMenuIds((menuIds) => [...menuIds, menuId]);
    }
  };

  console.log("selectedMenuIds: ", selectedMenuIds);
  const generatedProps = {
    // generated props here
    allMenu,
    handleSelectMenu,
    selectedMenuIds,
  };
  return <ItemsView {...generatedProps} />;
};

export default Items;
