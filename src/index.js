import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddCourse from './components/AddCourse';
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter,NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import CourseDetail from './components/CourseDetail';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import { addWrapperComponent } from './components/WrapperComponent ';


const store=createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>

    
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink exact activeStyle={{color:'red'}} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{color:'red'}} to="/add">Add Course</NavLink>
                </li>
                <li>
                    <NavLink exact activeStyle={{color:'red'}} to="/courses/:id">Course Details</NavLink>
                </li>
                
            </ul>
            
            <Route path="/" exact component={App}/>
            <Route path="/add" exact component={addWrapperComponent}/>
            <Route path="/courses/:id" exact  render={
                ({match})=>{
                    return (<CourseDetail selectedCourseId={match.params.id} />)
                }
            }
            />

        </BrowserRouter>
    </Provider>, 
        document.getElementById('root'));
