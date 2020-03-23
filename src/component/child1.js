import React, { Component} from 'react'

export default class Child1 extends Component {
    constructor(props){
        super(props)
        this.state = {
                changeHua : false
        }

    }

    static getDerivedStateFromProps(props){
        return {
            changeHua: props.parentState
        }
    }
    
    
    render(){
        // const {text} = this.props    
        const {changeHua} = this.state
        const parentState = this.props
        console.log(parentState)
        return(
            <div>
                <h1>
                {changeHua ? 'Change hogeya hai ' : 'Change nahi hua hai'}
                </h1>
                        <button>
                            Click Child 1
                        </button>
            </div>
        )
    }
}

