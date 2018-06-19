import React from "react";

import HierarchyItems from "./HierarchyItems";
import { UlItems } from "./styles";

export default ({ childs, selectedLevel, keyy }) => (
  <UlItems key={keyy && keyy}>
    <HierarchyItems childs={childs} selectedLevel={selectedLevel} />
  </UlItems>
);
