import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "./Item";
import { navChildTypes } from "./types";

export default class HierarchyItems extends Component {
  static propTypes = {
    childs: navChildTypes
  };

  state = {
    selectedLevel: this.props.selectedLevel || null
  };

  handleSelectedLevel = selectedLevel => {
    this.setState({ selectedLevel });
  };

  render() {
    const { childs } = this.props;
    const { selectedLevel } = this.state;

    return childs.map(
      ({ navigationNode: { navigationItem, childs }, isFirstLevel }) => (
        <Item
          navigationItem={navigationItem}
          childs={childs}
          isFirstLevel={isFirstLevel || false}
          handleSelectedLevel={this.handleSelectedLevel}
          selectedLevel={selectedLevel}
        />
      )
    );
  }
}
