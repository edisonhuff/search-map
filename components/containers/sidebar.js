import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ACTION_CREATORS } from '../../actions';
import SideBar from '../sidebar';

const mapStateToProps = ({
  places,
  sidebar: { isOpen, selectedPlace },
}) => ({
  places,
  isOpen,
  selectedPlace,
});

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(
    ACTION_CREATORS.SET_SELECTED_PLACE,
    dispatch,
  ),
  setSidebarOpen: bindActionCreators(
    ACTION_CREATORS.SET_SIDEBAR_OPEN,
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
