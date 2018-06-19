import React from "react";

import RenderHierachyNavigationItems from "./HierarchyNavigationItems";
import { ImgItem, DivItem, SpanItem } from "./styles";

export default class Item extends React.Component {
  state = {
    isShown: false
  };

  handleShow = () => {
    return this.setState(({ isShown }) => ({ isShown: !isShown }));
  };

  render() {
    const {
      navigationItem: { departmentId, image, name },
      isFirstLevel,
      childs
    } = this.props;

    const { isShown } = this.state;
    return (
      <li key={departmentId}>
        <DivItem onClick={() => childs && this.handleShow()}>
          {image && isFirstLevel && <ImgItem src={image} alt={name} />}
          <SpanItem>{name}</SpanItem>
        </DivItem>
        {childs && isShown && <RenderHierachyNavigationItems childs={childs} />}
      </li>
    );
  }
}
