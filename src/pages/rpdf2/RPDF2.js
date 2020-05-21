import React from 'react';

class RPDF2 extends React.Component {
  
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
        <iframe 
          id="theFrame" 
          src="https://www.eurofound.europa.eu/sites/default/files/ef_publication/field_ef_document/ef1710en.pdf" 
          height="300" 
          width="300"
          ref={this.iframeElement} 
        >
        </iframe>
      </div>
    );
  }
}

export default RPDF2;
