import {connect} from 'react-redux';
import OrderForm from './OrderForm';
//import TripListOptions from './TripListOptions';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';
//import {getAllFilters, changeSearchPhrase, addTagToFilters, removeTagFromFilters, changeDurationFilter} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);