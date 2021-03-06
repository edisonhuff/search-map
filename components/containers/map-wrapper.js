import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ACTION_CREATORS } from '../../actions';
import MapWrapper from '../map-wrapper';

const mapStateToProps = ({ map: { center }, places }) => ({
  center,
  places,
});

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(
    ACTION_CREATORS.SET_CENTER,
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapWrapper);
