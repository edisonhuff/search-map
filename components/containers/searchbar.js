import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ACTION_CREATORS, ASYNC_ACTION_CREATORS } from '../../actions';
import SearchBar from '../searchbar';

const mapStateToProps = ({ searchbar: { value, liveResults } }) => ({
  liveResults,
  value,
  onSubmit: (event) => console.log(Object.keys[event]),
});

const mapDispatchToProps = dispatch => ({
  onChange: bindActionCreators(
    ACTION_CREATORS.SET_SEARCH_VALUE,
    dispatch,
  ),
  // onChange: bindActionCreators(
  //   ASYNC_ACTION_CREATORS.GET_LIVE_SEARCH,
  //   dispatch,
  // ),
  // onSubmit: bindActionCreators(
  //   ASYNC_ACTION_CREATORS.GET_SEARCH_RESULTS,
  //   dispatch,
  // ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
