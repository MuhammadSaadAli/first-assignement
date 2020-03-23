import React from 'react';
import swal from 'sweetalert'

export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
 }
 static getDerivedStateFromProps(props , state){
   const {danceSteps} = state
   const {furtherSteps , applaud , stars} = props
  return {
    danceSteps: [...danceSteps , ...furtherSteps],
    startedPerforming: furtherSteps.length  ? true : false,
    emotion : applaud || stars>=4 ? 'Happy' : 'nervous',
    // emotion : stars>=4 ?  'Happy' : 'nervous'
    
  }
  
}

 componentDidMount(){
     this.setState({
         danceSteps:['Step 1' , 'Step 2']
     })
 }

 qualified() {
   this.setState({startedPerforming: false})
 }

  
 componentWillUnmount(){
  
  swal("Good job!", "The Judges give you full remarks. ", "success"); 
}

 render() {
   const {dressColor , furtherSteps} = this.props;
   const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;
   console.log('kids.js Dance steps  -------- ' , danceSteps)
   console.log('kids.js further steps  -------- ' , furtherSteps)

        console.log(danceSteps , '----------- Dance Step ')
   return (
   <div>
     <div>dressColor: { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
    <div>Emotion: { emotion }</div>
    {startedPerforming &&
    <div>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
      <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
    </div>}
</div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
