import React, {Component} from 'react';

class Ball extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div style={{
        borderRadius: 50,
        backgroundColor: this.props.color,
        marginTop: 200,
        marginLeft: this.props.marginLeft,
        width: 50,
        height: 50,
        float: 'left'
      }} onClick={this.props.onClick}>
      </div>
    );
  }
}

export default Ball;
