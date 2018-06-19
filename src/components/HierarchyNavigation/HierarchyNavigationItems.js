import React from "react";
import PropTypes from "prop-types";

import HierarchyItems from "./HierarchyItems";
import { UlItems } from "./styles";
import { navChildTypes } from "./types";

const HierarchyNavigationItems = ({ childs, selectedLevel, childKey }) => (
  <UlItems key={childKey && childKey}>
    <HierarchyItems childs={childs} selectedLevel={selectedLevel} />
  </UlItems>
);

HierarchyNavigationItems.propTypes = {
  childs: navChildTypes,
  selectedLevel: PropTypes.string,
  childKey: PropTypes.string
};

export default HierarchyNavigationItems;
