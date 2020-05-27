import React, { Component } from 'react'
import Base from '../../components/base';
import { isMobile } from 'react-device-detect';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    if (isMobile) {
      this.props.history.push('/mobile/login');
    }
  }
  render() {
    return (
      <Base >
        hello there
      </Base>
    )
  }
}
