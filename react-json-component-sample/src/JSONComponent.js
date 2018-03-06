import React, { Component, Fragment } from 'react';

class JSONComponent extends Component {
  renderJSON(jsonSrc) {
    if (typeof jsonSrc === 'function') return jsonSrc(jsonSrc.props || {});
    if (jsonSrc.render && typeof jsonSrc.render === 'function') return jsonSrc.render(jsonSrc.props || {});

    if (typeof jsonSrc === 'string') return jsonSrc;

    if (Array.isArray(jsonSrc)) {
      return jsonSrc.map(( c, i ) => {
        return <Fragment key={i}>{this.renderJSON(c)}</Fragment>
      });
    }

    const componentMap = this.props.componentMap || {};
    const elementType = jsonSrc.type ? ( componentMap[jsonSrc.type] || jsonSrc.type ) : 'div';

    return React.createElement(
      elementType,
      jsonSrc.props,
      this.renderJSON(jsonSrc.children || (jsonSrc.props && jsonSrc.props.children) || "")
    );
  }

 errored(e) {
   const errorStyle = { fontFamily:"monospace", backgroundColor:"#ffb700", color:"#f00" }
   return (
     <div style={errorStyle}>
      There was a problem rendering this JSONComponent:
      <pre>
        {e ? e.toString() : 'Error info not available'}
      </pre>
     </div>
   )
 }

  render() {
    const { jsonSrc } = this.props;

    try {
      JSON.stringify(jsonSrc);
    } catch(e) {
      return this.errored(e);
    }

    return this.renderJSON(jsonSrc);
  }
}

export default JSONComponent;