import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux" // Redux Store를 애플리케이션에 제공하는 Provider
import { BrowserRouter } from 'react-router-dom'
import { persistStore } from 'redux-persist' // Redux Persist의 persistStore 함수
import { PersistGate } from 'redux-persist/integration/react' // Redux Persist의 PersistGate 컴포넌트
import store from './store/store.js'

const persistor =persistStore(store);


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
 </BrowserRouter>
)
