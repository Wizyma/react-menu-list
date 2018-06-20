import React, { Component } from "react";
import PropTypes from "prop-types";

import HierarchyNavigationItems from "./HierarchyNavigationItems";
import { ImgItem, DivItem, SpanItem } from "./styles";
import { navChildTypes, navItemsTypes } from "./types";

export default class Item extends Component {
  static propTypes = {
    navigationItem: navItemsTypes,
    childs: navChildTypes,
    selectedLevel: PropTypes.string,
    isFirstLevel: PropTypes.bool.isRequired
  };

  state = {
    isOpen: false
  };

  handleShow = id => {
    if (
      this.props.isFirstLevel &&
      this.state.isOpen &&
      id !== this.props.selectedLevel
    ) {
      return this.setState(({ isOpen }) => ({
        isOpen: true
      }));
    }
    return this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  renderChildren = (
    {
      navigationItem: { departmentId },
      isFirstLevel,
      childs,
      selectedLevel
    } = this.props,
    { isOpen } = this.state
  ) => {
    if (childs && isOpen && isFirstLevel && departmentId === selectedLevel) {
      return (
        <HierarchyNavigationItems
          selectedLevel={selectedLevel}
          childs={childs}
          childKey={departmentId}
        />
      );
    } else if (!isFirstLevel && isOpen) {
      return (
        <HierarchyNavigationItems
          selectedLevel={selectedLevel}
          childs={childs}
          childKey={departmentId}
        />
      );
    }
  };

  render() {
    const {
      navigationItem: { departmentId, image, name },
      isFirstLevel,
      childs,
      handleSelectedLevel
    } = this.props;

    return (
      <li key={departmentId}>
        <DivItem
          onClick={() =>
            (childs && this.handleShow(departmentId)) ||
            (isFirstLevel && handleSelectedLevel(departmentId))
          }
        >
          {image && isFirstLevel && <ImgItem src={image} alt={name} />}
          <SpanItem hasChild={childs && true}>{name}</SpanItem>
        </DivItem>
        {this.renderChildren()}
      </li>
    );
  }
}
