import React, { Component } from "react";
import PropTypes from "prop-types";

import HierarchyNavigationItems from "./HierarchyNavigationItems";
import { ImgItem, DivItem, SpanItem, Wrapper, SpanIcon } from "./styles";
import { navChildTypes, navItemsTypes } from "./types";

export default class Item extends Component {
  static propTypes = {
    navigationItem: navItemsTypes,
    childs: navChildTypes,
    selectedLevel: PropTypes.string,
    isFirstLevel: PropTypes.bool.isRequired
  };

  state = {
    isOpen: false,
    icon: "+"
  };

  handleShow = id => {
    const { isFirstLevel, selectedLevel, childs } = this.props;
    if (isFirstLevel && this.state.isOpen && id !== selectedLevel) {
      return this.setState(({ isOpen }) => ({
        isOpen: true
      }));
    }
    return this.setState(({ isOpen, icon }) => ({
      isOpen: !isOpen,
      icon: !isFirstLevel && childs && icon === "+" ? "-" : "+"
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
          isFirstLevel={isFirstLevel}
          onClick={() =>
            (childs && this.handleShow(departmentId)) ||
            (isFirstLevel && handleSelectedLevel(departmentId))
          }
        >
          <Wrapper>
            {image && isFirstLevel && <ImgItem src={image} alt={name} />}
          </Wrapper>
          <Wrapper isSpanWraper>
            <SpanItem isFirstLevel={isFirstLevel}>{name}</SpanItem>
            {childs &&
              !isFirstLevel && (
                <Wrapper
                  isSpanWraper
                  props={{
                    position: "absolute",
                    right: 20
                  }}
                >
                  <SpanIcon>{this.state.icon}</SpanIcon>
                </Wrapper>
              )}
          </Wrapper>
        </DivItem>
        {this.renderChildren()}
      </li>
    );
  }
}
