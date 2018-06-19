import React, { Component } from "react";

import Item from "./Item";

export default class HierarchyItems extends Component {
  state = {
    selectedLevel: this.props.selectedLevel || null
  };

  handleSelectedLevel = selectedLevel => {
    this.setState({ selectedLevel });
  };

  render() {
    const { childs } = this.props;
    const { selectedLevel } = this.state;
    console.log(selectedLevel);
    return childs.map(
      ({ navigationNode: { navigationItem, childs }, isFirstLevel }) => (
        <Item
          navigationItem={navigationItem}
          childs={childs}
          isFirstLevel={isFirstLevel}
          handleSelectedLevel={this.handleSelectedLevel}
          selectedLevel={selectedLevel}
        />
      )
    );
  }
}
