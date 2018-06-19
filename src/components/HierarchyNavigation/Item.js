import React from "react";

import RenderHierachyNavigationItems from "./HierarchyNavigationItems";
import { ImgItem, DivItem, SpanItem } from "./styles";

export default class Item extends React.Component {
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
          keyy={departmentId}
        />
      );
    } else if (!isFirstLevel && isShown) {
      return (
        <RenderHierachyNavigationItems
          selectedLevel={selectedLevel}
          childs={childs}
          keyy={departmentId}
        />
      );
    }
  };

  render() {
    const {
      navigationItem: { departmentId, image, name },
      isFirstLevel,
      childs,
      handleSelectedLevel,
      selectedLevel
    } = this.props;

    const { isShown } = this.state;
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
