import courses from '../data/courses';
import { removeCourse } from './actions';
import { addCourse } from './actions';

let rootReducer = function(currentState = courses, action){
    console.log(action.course);
    switch(action.type){
        case 'REMOVE_COURSE':
                return removeCourseFromArray(action.index, currentState);
        case 'ADD_COURSE':
               return addCourseToArray(currentState,action.course);
        default:
            return currentState

    }
    console.log(`The current state of the application is` );
    //console.log(currentState);
    return currentState;
}

function removeCourseFromArray(index, state){
    
    /****************** Using Filter Function **************/
    // let a = state.map(state=>state);
    // return  a.filter(each=>{
    //     return each.id!==index;       
    // })

    //Using IndexOf Function
    let found_index=state.indexOf(index);
    return [...state.slice(0,found_index),...state.slice(found_index+1)];

}

function addCourseToArray(currentState,data){
console.log([...currentState,data]);
return [...currentState,data];
}
export default rootReducer;