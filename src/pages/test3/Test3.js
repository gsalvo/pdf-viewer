import React from 'react';

class Test3 extends React.Component {
  constructor(props){
    super(props);
    this.path = 'https://drive.google.com/viewerng/viewer';
    this.state = {
      pid: 'explorer',
      efh: 'false',
      a: 'v',
      chome: 'false',
      embedded: 'true',
    }
  };


 

  render() {
    
    return (
      <div className="content">
        <iframe title={'Documentos'} src={`${this.path}?url=${this.props.file}&embedded=${this.state.embedded}`} key={`${this.state.url}`} className='iframe-pdf'/>
      </div>
    );
  }
}
export default Test3;
