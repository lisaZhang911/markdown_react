import React from 'react';
import marked from 'marked'


class DisplayContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      txtValu:'Heading\n==='
    }
  }
  rawMarkup(value){
    var rawMarkup = marked(value)
    return { __html: rawMarkup };
  }
  test(event){
    this.setState({txtValu:event.target.value})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <textarea onChange={this.test.bind(this)}>{this.state.txtValu}</textarea>
          <p className="show" dangerouslySetInnerHTML={this.rawMarkup(this.state.txtValu)}></p>
        </header>
      </div>
    );
  }
}


export default DisplayContainer;
