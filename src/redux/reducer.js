import courses from '../data/courses'
let rootReducer = function(currentState=courses,action){

    console.log(`Action is ${$action}`);
    console.log(`The Curent State of the application is ${$currentState}`);
    return currentState;
}
export default reducer;
