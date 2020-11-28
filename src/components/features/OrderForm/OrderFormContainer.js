import {connect} from 'react-redux';
import OrderForm from './OrderForm';
//import TripListOptions from './TripListOptions';
import {getOrderOptions} from '../../../redux/orderRedux';
//import {getAllFilters, changeSearchPhrase, addTagToFilters, removeTagFromFilters, changeDurationFilter} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

// const mapDispatchToProps = dispatch => ({
//   changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
//   addTagToFilters: tag => dispatch(addTagToFilters(tag)),
//   removeTagFromFilters: tag => dispatch(removeTagFromFilters(tag)),
//   changeDurationFilter: duration => dispatch(changeDurationFilter(duration)),
// });

export default connect(mapStateToProps)(OrderForm);