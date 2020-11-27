import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTagToFilters, removeTagFromFilters, changeDurationFilter} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  addTagToFilters: tag => dispatch(addTagToFilters(tag)),
  removeTagFromFilters: tag => dispatch(removeTagFromFilters(tag)),
  changeDurationFilter: duration => dispatch(changeDurationFilter(duration)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
