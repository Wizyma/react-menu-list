import React, { Component } from "react";
import PropTypes from "prop-types";

import RenderHierachyNavigationItems from "./HierarchyNavigationItems";
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
    isShown: false
  };

  handleShow = () => {
    return this.setState(({ isShown }) => ({
      isShown: !isShown
    }));
  };

  renderChildren = (
    {
      navigationItem: { departmentId },
      isFirstLevel,
      childs,
      selectedLevel
    } = this.props,
    { isShown } = this.state
  ) => {
    if (childs && isShown && isFirstLevel && departmentId === selectedLevel) {
      return (
        <RenderHierachyNavigationItems
          selectedLevel={selectedLevel}
          childs={childs}
          childKey={departmentId}
        />
      );
    } else if (!isFirstLevel && isShown) {
      return (
        <RenderHierachyNavigationItems
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
            (childs && this.handleShow()) ||
            (isFirstLevel && handleSelectedLevel(departmentId))
          }
        >
          {image && isFirstLevel && <ImgItem src={image} alt={name} />}
          <SpanItem>{name}</SpanItem>
        </DivItem>
        {this.renderChildren()}
      </li>
    );
  }
}
