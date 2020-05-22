import React from 'react';

class Test2 extends React.Component {
  
  constructor(){
    super();
    this.iframeElement = React.createRef();
  }

  componentDidMount() {
    console.log(this.iframeElement);
    //this.iframe.getElementsByTagName("img")[0].style.width="100%";
  } 

  render() {
    return (
      <div className="content">
        
      </div>
    );
  }
}

export default Test2;
