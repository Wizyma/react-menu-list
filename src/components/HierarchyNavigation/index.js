import React, { Component } from "react";
import navigation from "../../../__mock__/generated.json";
import HierachyNavigationItems from "./HierarchyNavigationItems";

export default class HierarchyNavigation extends Component {
  state = {
    navigationNodes: navigation
  };

  render() {
    const { navigationNodes: { navigationNode: { childs } } } = this.state;
    const navCopy = childs.map(child => ({
      ...child,
      isFirstLevel: true
    }));

    return <HierachyNavigationItems childs={navCopy} />;
  }
}
