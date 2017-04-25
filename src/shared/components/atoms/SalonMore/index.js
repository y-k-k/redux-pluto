import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';
import { showOnScroll } from '../../utils/scrollComponents';

export default compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    children: PropTypes.node.isRequired,
    onShow: PropTypes.func.isRequired,
  }),
  showOnScroll,
)(class SalonMore extends Component {
  render() {
    const { children, onShow } = this.props;

    return (
      <div onClick={onShow}>
        {children}
      </div>
    );
  }
});
