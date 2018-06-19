import React from "react";

import Item from "./Item";

export default ({ childs, show, handleItemsToShow }) =>
  childs.map(({ navigationNode: { navigationItem, childs }, isFirstLevel }) => (
    <Item
      navigationItem={navigationItem}
      childs={childs}
      isFirstLevel={isFirstLevel}
    />
  ));
