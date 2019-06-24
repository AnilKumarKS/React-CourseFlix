import React from 'react';
import axios from 'axios';

class AddCourse extends React.Component{
    constructor(){
        super()
        this.state={
            courseName:'',
            courseDuration:'',
            coursePrice:'',
            invalidCourseName:''
        }
        this.handleCourseName = this.handleCourseName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    handleCourseName(event){
        //console.log(event.target.value);
        const value = event.target.value;
        if(value.length<4){
            this.setState({
                invalidCourseName:'Wrong'
            });
        }
        else{
            this.setState({
                invalidCourseName:''
            });
        }
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.courseName.value);
        const course = {
            title:event.target.courseName.value
        };
        const promise=axios.post('https://my-json-server.typicode.com/AnilKumarKS/Nature/products',{
            method:'POST',
            data:course
        })
    }
    
    render(){
        return (
           <div className="row">
               <div className="col-md-6">
                <form onSubmit={(event)=>{this.handleSubmit(event)}}>
                        <div className="form-group">
                            <label htmlFor="name">Course Name</label>
                            <input type="text" className="form-control" id="courseName" aria-describedby="emailHelp" placeholder="Enter Course Name"
                            onChange={(event)=>{this.handleCourseName(event)}}/>
                            <div>
                                {this.state.invalidCourseName ? (<span className="alert alert-danger">{this.state.invalidCourseName}</span>) : ''}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Course Price</label>
                            <input type="text" className="form-control" id="price" placeholder="Enter Price"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Course Duration</label>
                            <input type="text" className="form-control" id="duration" placeholder="Enter Duration"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
           </div>
        );
    }
}
export default AddCourse;