import React from "react";

export class ExpandOnClick extends React.Component {
  constructor() {
    super();
    this.state = { isExpanded: false };
  }

  handleClick = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };

  render() {
    let { isExpanded } = this.state;
    let { Clickable, Expandable } = this.props;

    // todo make node type dynamic
    /*
           if only a string, wrap in a span with handler
           else do React.cloneElement(Clickable, {onClick:this.handleClick})
         */
    return (
      <>
        <span
          onClick={this.handleClick}
          style={{ textDecoration: "underline" }}
        >
          {<Clickable />}
        </span>
        {isExpanded ? <Expandable /> : <div style={{ marginBottom: "3em" }} />}
      </>
    );
  }
}
