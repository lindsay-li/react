import React from 'react'
import { createStore } from 'redux'
import reducer from './reducer'


const Store  = createStore(reducer)

export default Store