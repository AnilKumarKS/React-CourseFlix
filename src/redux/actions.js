//declare all the actions in this file..

//define action generators
export function addCourse(course){
    return{
        type:"ADD_COURSE",
        //course:course       ---If Variable name and values is same we can write only once
        course

    }

}

//action generators
export function removeCourse(){
    return {
        type:"REMOVE_COURSE",
        index
    }
}