import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/practice/actions';

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { getApparels } = this.props;
    getApparels();
  }

  static getDerivedStateFromProps(props, state) {
    const update = {};
    // if (props.isLoading !== state.isLoading) {
    //   update.isLoading = props.isLoading;
    // }
    if (props.apparels) {
      update.apparels = props.apparels;
    }
    return update;
  }

  render() {
    const { apparels } = this.state
    return (
      <div>
        App:{apparels && apparels.data}
      </div>
    );
  }
}

export default connect(
  state => ({
    // isLoading: state.newUser.isLoading,
    apparels: state.practice.apparels,
  }),
  { getApparels: actions.getApparels.request },
)(Practice);
// export default Practice;