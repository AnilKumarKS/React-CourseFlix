import React from 'react'

class CourseDetail extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Passed Id is:{this.props.selectedCourseId}</h1>
            // <ul>
            //     <li>{this.props.selectedCourseId.name}</li>
            // </ul>
        );
    }
}
export default CourseDetail;