import {connect} from 'react-redux';
import Courses from './Courses';
import {bindActionCreators} from 'redux';
import {addCourse,removeCourse,searchCourse} from '../redux/actions';
import AddCourse from './AddCourse';
import App from './App';

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
function searchDispatchToProps(dispatch){
    return bindActionCreators({searchCourse},dispatch)

}
  
  export const WrapperComponent = connect(mapStateToProps,mapDispatchToProps)(Courses)
  export const addWrapperComponent = connect(mapStateToProps,addDispatchToProps)(AddCourse)
  export const searchWrapperComponent = connect(mapStateToProps,searchDispatchToProps)(App)