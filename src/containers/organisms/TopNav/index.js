import { withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import TopNav from 'components/organisms/TopNav';
import { firebase } from 'data/firebase';

const enhancer = compose(
  withHandlers({
    onBackButtonClick: props => e => {
      props.history.goBack();
    },
    onLogoutButtonClick: props => e => {
      firebase.auth().signOut();
      // TODO: Catch errors and do something useful with them!
    }
  })
);

export default withRouter(enhancer(TopNav));
