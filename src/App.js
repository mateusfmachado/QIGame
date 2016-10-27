
import React, { Component } from 'react';
import './App.css';
import Ball from './Ball';
import Text from './Text';

var colors = [
  {color: "#d1191f", name: "Red"},
  {color: "#2c1ca5", name: "Blue"},
  {color: "#1ca52e", name: "Green"},
  {color: "#e4e814", name: "Yellow"},
  {color: "#14e1e8", name: "Light Blue"},
  {color: "#e85714", name: "Orange"}
];

var randomColors = function(){
  var color1 = ''+Math.floor(Math.random()*6);
  var color2;
  do{
    color2 = ''+Math.floor(Math.random()*6);
  }while(color2 === color1);
  return {color1, color2};
};

var sortValues = function(randomColor){
  if(Math.floor(Math.random()*2) === 1){
    return {nameColor: colors[randomColor.color1].name,
            colorText: colors[randomColor.color2].color};
  }
  return {nameColor: colors[randomColor.color2].name,
          colorText: colors[randomColor.color1].color};
};

class App extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);

    var randomColor = randomColors();
    var orderRender = sortValues(randomColor);
    this.state = {
      bgColor1: randomColor.color1+"",
      bgColor2: randomColor.color2+"",
      nameColor: orderRender.nameColor+"",
      colorText: orderRender.colorText+""
    };

  }

  changeColor(){
    var randomColor = randomColors();
    var orderRender = sortValues(randomColor);
    this.setState({
      bgColor1: randomColor.color1+"",
      bgColor2: randomColor.color2+"",
      nameColor: orderRender.nameColor+"",
      colorText: orderRender.colorText+""
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={{backgroundColor: "#fff"}} >
          <Text colorText={this.state.colorText} nameColor={this.state.nameColor}/>
          <Ball marginLeft="48%" color={colors[this.state.bgColor1].color} onClick={this.changeColor}/>
          <Ball marginLeft="48%" color={colors[this.state.bgColor2].color} onClick={this.changeColor}/>
        </div>
      </div>
    );
  }
}

export default App;
