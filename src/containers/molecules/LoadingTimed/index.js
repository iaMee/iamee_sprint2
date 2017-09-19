import React from 'react';
import Loading from 'components/atoms/Loading';

// Taken from react-loadable principle:
// "
// Flashing a loading screen immediately can actually cause users
// to perceive something taking longer than it did in reality.
// It's often better to not show the user anything for
// a few hundred milliseconds in case something loads right away.
// "
const DELAY = 200;

class LoadingTimed extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldShowLoadingComp: false
    };
  }

  componentDidMount() {
    this.showLoadingTimeout = setTimeout(() => {
      this.setState({
        shouldShowLoadingComp: true
      });
    }, DELAY);
  }

  componentWillUnmount() {
    clearTimeout(this.showLoadingTimeout);
  }

  render() {
    const { shouldShowLoadingComp } = this.state;
    const { loadingComponent: LoadingComponent } = this.props;

    return shouldShowLoadingComp ? <LoadingComponent /> : null;
  }
}

LoadingTimed.defaultProps = {
  loadingComponent: Loading
};

export default LoadingTimed;
