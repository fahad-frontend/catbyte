import React from "react"
import Routes from "./Routes"
import {store} from '../redux/store'
import {Provider} from 'react-redux'

const Providers = () => {
    return ( 
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default Providers