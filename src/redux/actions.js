//declare all the actions in this file..

//define action generators 
export function addCourse(course){
    console.log("inside add action")
    return {
        type:"ADD_COURSE",
        course
    }
}

//action generators
export function removeCourse(index){
    console.log('called by the component after component did mount');
    //action is just a javascript object
    return {
        type:"REMOVE_COURSE",
        index
    }
}
