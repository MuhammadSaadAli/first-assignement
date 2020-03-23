import React,{Component} from 'react';
import './App.css';
// import Child1 from './component/child1';
// import Child2 from './component/child2'
import Kid from './component/kids/kids'
import Teacher from './component/Teacher/Teacher'
import Judge from './component/Judge/Judge'

class App extends Component {

  constructor(){
    super()
    this.state = {
      // changehua : false
      volume:0,
      stars:0
    }
    this.updateStep = this.updateStep.bind(this)
    this.emotion = this.emotion.bind(this)
    this.stopSteps = this.stopSteps.bind(this)
    
  }

  static getDerivedStateFromProps(){
    return {
      volme:5
    }
  }

  // changeHogeya = () => {
  //   this.setState({
  //     changehua:true
  //   })
  // }

  updateStep ( furtherSteps ) {
    this.setState({
      furtherSteps  
    })
  }

    emotion (applaud){
      this.setState({
        applaud
      })
    }

    stopSteps (stars){
      this.setState({
        stars
      })
    }

    
    render() { 
      console.log( 'Stars ----------- ' ,this.state.stars)
   console.log(this.state.furtherSteps)
   console.log(this.state.applaud, 'applaud')
    return (
    <div className="App">

      {
        this.state.stars < 4 ?
      <div style={{backgroundColor:'Green'}}>
      <img alt='kid' width='100px' src='https://media.wired.com/photos/5e3246cd56bcac00087f0a1e/4:3/w_1771,h_1328,c_limit/Culture-Success-Meme-Kid.jpg' />
      <h1>Kid Component</h1>

      <Kid furtherSteps={this.state.furtherSteps} applaud={this.state.applaud} 
      stars={this.state.stars}
      dressColor='yellow' />
      < br />
      </div> : null
      }

      <br/>
      <div style={{backgroundColor:'Blue'}}>
      <h1>Teacher Component</h1>
      <img src='https://www.educationnext.org/files/ednext-sept19-blog-hess-teacher.png' alt='Teacher' width='160px' />
      <Teacher updateSteps= {this.updateStep}/>
      </div>
      <br/>
      <br/>

      { this.state.stars < 4 ?
      <div style={{backgroundColor:'Red'}}>
      <h1>Judge Component</h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJl01oGoWRiwANWqd2-uvXN3lBnUVa1qWauTDb9qNBZbX4Ee3T' alt='Judge' width='210px' />
      <Judge stopSteps={this.stopSteps} emotion={this.emotion}/>
      </div> : null
      }
      <br/>
      <br/>
      <br/>

      {/* <Child1 text={'Child 1 text'} parentState={this.state.changehua} />
      <Child2 changeHogeya = {this.changeHogeya}/>
       */}
    </div>
  );
}
}

export default App;
