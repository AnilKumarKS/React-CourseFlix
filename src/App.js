import React,{Component} from 'react';
import './App.css';
import Courses from './components/Courses';
import { WrapperComponent } from './components/WrapperComponent ';
// import CourseDetail from './components/CourseDetail';


class App extends Component {

  constructor(props){
    super(props)
    this.state={
    courses:[
      {id:1,name:'React',price:100, selected:false},
      {id:2,name:'Angular',price:200,selected:false},
      {id:3,name:'Java',price:300, selected:false},
      {id:4,name:'Javascript',price:400, selected:false},
      {id:5,name:'Spring',price:500, selected:false},
      {id:6,name:'Hibernate',price:600, selected:false}
    ]
  }
    this.handleCourseClick=this.handleCourseClick.bind(this);
  }
  
  
  handleCourseClick(event){
    console.log('Came inside the parent', event.target.id);
    let updatedCourses = this.state.courses.map(course => course);
    updatedCourses[event.target.id-1].selected = true;
    this.setState({
      courses:updatedCourses
    })
  }

  

  // render(){
  //   let selectedCourse = this.state.courses.filter(course => course.selected);
  //   console.log('inside tghe render method')
  //   console.log(selectedCourse)
  //   if(selectedCourse.length > 0) {
  //     return (<CourseDetail course={selectedCourse[0]}/>)
  //   } else {
  //     return (
  //       <div>
  //         <Courses data={this.state.courses} handleClick={this.handleCourseClick}/>
  //       </div>
  //     );
  //   }
  // }
  render(){
    return(
      <div>
       <WrapperComponent/>
    </div>
    );
  }
}

export default App;
