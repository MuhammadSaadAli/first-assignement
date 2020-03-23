import React, { Component} from 'react'

export default class Childs extends Component {
    // constructor(props){
    //     super(props)
    // }
    
    render(){
        return(
            <div>
                        <button onClick={this.props.changeHogeya}>
                            Click Child 2
                        </button>
            </div>
        )
    }
}

