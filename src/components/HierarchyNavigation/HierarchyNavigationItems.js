import React from "react";

import HierarchyItems from "./HierarchyItems";
import { UlItems } from "./styles";

export default ({ childs }) => (
  <UlItems>
    <HierarchyItems childs={childs} />
  </UlItems>
);
