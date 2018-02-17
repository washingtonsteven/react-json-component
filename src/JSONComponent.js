import React, { Component, Fragment } from 'react';

class JSONComponent extends Component {
  renderJSON(jsonSrc) {
    if (jsonSrc.render && typeof jsonSrc.render === 'function') return jsonSrc.render(jsonSrc.props || {});

    if (typeof jsonSrc === 'string') return jsonSrc;

    if (Array.isArray(jsonSrc)) {
      return jsonSrc.map(( c, i ) => {
        return <Fragment key={i}>{this.renderJSON(c)}</Fragment>
      });
    }

    const componentMap = jsonSrc.componentMap || {};
    const elementType = jsonSrc.type ? ( componentMap[jsonSrc.type] || jsonSrc.type ) : 'div';

    return React.createElement(
      elementType,
      {...jsonSrc.props},
      this.renderJSON(jsonSrc.children || "")
    );
  }

  render() {
    const { jsonSrc } = this.props;

    return this.renderJSON(jsonSrc);
  }
}

export default JSONComponent;