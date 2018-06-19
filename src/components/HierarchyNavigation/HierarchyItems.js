import React, { Component } from "react";

import Item from "./Item";

export default class HierarchyItems extends Component {
  render() {
    const { childs } = this.props;
    return childs.map(
      ({ navigationNode: { navigationItem, childs }, isFirstLevel }) => (
        <Item
          navigationItem={navigationItem}
          childs={childs}
          isFirstLevel={isFirstLevel}
        />
      )
    );
  }
}
