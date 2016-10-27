import React, {Component} from 'react';

class Text extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <h1 style={{color:"#222"}}>Click in the <span style={{color:this.props.colorText}}>{this.props.nameColor}</span> ball! </h1>
      </div>
    );
  }
}

export default Text;
