import React from 'react'
import swal from 'sweetalert'

export default class Judge extends React.Component {
    constructor() {
     super()
   
     this.state = {stars: 0, available: false}
    }
   
    applaud() {
      //Send this applaud status to Kid.js
      let clap = true
      return this.props.emotion(clap)
    }
    componentWillUnmount(){
      console.log('Job done')
      setTimeout(() => {
  swal("Job done!", "Now the judges are also going.", "success"); 

      } ,2000)
    }
   
    provideStars() {
      const {stars} = this.state;
   
      this.setState({stars: stars<5 ? stars + 1 : '5'})
    // this.setState({stars: stars + 1 })
    this.props.stopSteps(stars)
    }
    // shouldComponentUpdate(newState){
    //     let stars = this.state
    //     stars =  stars <=5 ? stars + 1 : '5' 
    //     return true
    // }

   
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
          <button type="button" onClick={this.applaud.bind(this)}>
           Appreciate performance
          </button>
          <button type="button" onClick={this.provideStars.bind(this)}>
           Provide stars
          </button>
   
          Kid is available: {available}
   
          Stars gained: {stars}
        </div>
      );
    }
   }
   