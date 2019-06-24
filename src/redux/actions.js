//declare all the actions in this file..

//define action generators 
export function addCourse(course){
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

//action generators
export function searchCourse(search_key){
    //action is just a javascript object
    return {
        type:"SEARCH_COURSE",
        search_key
    }
}

