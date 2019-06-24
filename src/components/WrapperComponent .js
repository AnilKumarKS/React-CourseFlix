import {connect} from 'react-redux';
import Courses from './Courses';
import {bindActionCreators} from 'redux';
import {removeCourse} from '../redux/actions';
import {addCourse} from '../redux/actions';
import AddCourse from './AddCourse';

function mapStateToProps(state){
    return {
      courses:state
    }
  }
  function mapDispatchToProps(dispatch){
      return bindActionCreators({removeCourse},dispatch)

  }
  function addDispatchToProps(dispatch){
    return bindActionCreators({addCourse},dispatch)

}
  
  export const WrapperComponent = connect(mapStateToProps,mapDispatchToProps)(Courses)
  export const addWrapperComponent = connect(mapStateToProps,addDispatchToProps)(AddCourse)