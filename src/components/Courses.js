import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Courses extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props.data);
        return (
            <div>
                {
                    this.props.data.length>0 ? (
                        <ul>
                            {
                                this.props.data.map(course => 
                                <li style={{listStyle:'none',margin:'20px',padding:'20px',fontSize:'20px',backgroundColor:'orange'}} key={course.id}
                                     id={course.id}
                                        onClick={(event)=>this.props.handleClick(event)}>
                                        {course.name}
                                        <NavLink exact to="/courses/{course.id}"></NavLink>
                                    </li>
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