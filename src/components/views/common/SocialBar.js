import React, { Component } from "react";
import "./../../../stylesheets/SocialBar.css";

export default class SocialBar extends Component {
  render() {
    const uuidv4 = require("uuid/v4");
    const contentList = this.props.contentList;
    return (
      <div className="sb-wrapper">
        {contentList.map(item => (
          <div className="cell" key={uuidv4()}>
            <span role="img" aria-labelledby={item.contactType}>
              <a
                href={item.contactLink}
                className={"fa fa-" + item.contactType}
              >
                <div />
              </a>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
