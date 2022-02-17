import React, { Component } from "react";

import { sections } from "./072 directory.data";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((item) => {
          const { title, id, imageUrl, size } = item;
          return (
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Directory;
