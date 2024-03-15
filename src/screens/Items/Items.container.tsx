import ItemsView from "./Items.view";
import { useState, useEffect } from "react";
import { GetMenu } from "../../services/react-query/queries/menu";
import { useStore } from "../../store";
import NavigationService from "../../navigation/NavigationService";
import { MenuItem } from "../PromoDetails/PromoDetails.props";

const Items = () => {
  const {
    data: allMenu,
    status: allMenuStatus,
    error: allMenuError,
  } = GetMenu();

  const [selectedMenuIds, setSelectedMenuIds] = useState<MenuItem[]>([]);

  const handleSelectMenu = (menuId: MenuItem) => {
    const isSelected = selectedMenuIds?.includes(menuId);

    if (isSelected) {
      setSelectedMenuIds((menuIds) => menuIds.filter((id) => id !== menuId));
    } else {
      setSelectedMenuIds((menuIds) => [...menuIds, menuId]);
    }
  };

  const handleSave = () => {
    useStore.setState({ selectedMenuItemIds: selectedMenuIds });
    NavigationService.navigate("PromoDetails");
  };

  const generatedProps = {
    // generated props here
    allMenu,
    handleSelectMenu,
    selectedMenuIds,
    handleSave,
  };
  return <ItemsView {...generatedProps} />;
};

export default Items;
