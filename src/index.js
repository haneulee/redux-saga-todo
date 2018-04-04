import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

const action = (type, text, id) => store.dispatch({ type, text, id });
let todoId = 0;

sagaMiddleware.run(helloSaga);

function render() {
    ReactDOM.render(
        <App
            add={text => action("ADD_TODO", text, todoId++)}
            remove={id => action("REMOVE_TODO", "", id)}
            todoList={store.getState().todoList}
        />,
        document.getElementById("root")
    );
}

registerServiceWorker();
render();
store.subscribe(render);