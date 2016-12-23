import {
  connect,
  bindActionCreators,
} from 'redux';
import { ACTION_CREATORS } from '../../actions';
import MapWrapper from '../map-wrapper';

const mapStateToProps = state => state.map;

const mapDispatchToProps = dispatch => ({
  onClick: bindActionCreators(
    ACTION_CREATORS.SET_CENTER,
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapWrapper);
