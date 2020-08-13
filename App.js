import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import AppNavigator from "./src/Navigators/AppNavigator";
import createSagaMiddleware from "redux-saga";
import {
  View
} from 'react-native';

import allReducers from "./src/Redux/Reducers";
import RootSaga from "./src/Sagas/RootSaga";
import mushroom from "./src/Api/CallApi";
import FlashMessage from "react-native-flash-message";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      Loading: true
    }
  }
  onReady() {
    this.setState({
      Loading: false
    })
  }
  async componentDidMount() {
    if (mushroom.$auth.isReady)
    this.onReady();
    else
    mushroom.$auth.on("ready", () => this.onReady());    
  }
  render() {
    return this.state.Loading?<View></View> :(
      <Provider store={store}>
        <AppNavigator/>
        <FlashMessage position="top" />
      </Provider>
    );
  }
  
};
sagaMiddleware.run(RootSaga);
export default App;
