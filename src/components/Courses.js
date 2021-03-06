import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Courses extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        //console.log('component mounted ....')
     //   this.props.removeCourse(2);
    }

    render(){
        console.log(this.props.courses);
        return (
            <div>
                {
                    this.props.courses.length>0 ? (
                           
                        <ul>
                                <div className="col-md-4">Search : <input type="text" id="key" onChange="{searchFilter(event)}" placeholder="search here.." className="form-control" /></div>
                            {
                                this.props.courses.map(course => 
                                    
                                    <div className="col-md-3">
                                    <li style={{listStyle:'none',margin:'20px',padding:'20px',fontSize:'20px',backgroundColor:'orange'}} key={course.id}
                                     id={course.id}
                                       onClick={()=>{this.props.removeCourse(course)}}>
                                        {course.id}.{course.name}
                                        <NavLink exact to="/courses/{course.id}"></NavLink>
                                    </li>
                                    </div>
                                )
                            }
                        </ul>
                        ):
                        <h1>There are no Courses for Display</h1>
                }
            </div>
        );
    }
    
}
export default Courses;