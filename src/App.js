import React from "react";
import "./App.css";
import Textinput from "./components/textinput";
import Button from "./components/button";
import Switch from "./components/switch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Отправить",
    };
    this.send = this.send.bind();
    this.switchRef = React.createRef();
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  send = () => {
    alert('button click' + this.switchRef.current.checked);
    return true;
  };

  render() {
    const { buttonText } = this.state;
    return (
      <div className="App">
        <Textinput text="Имя" forwardedRef={this.nameRef}/>
        <Textinput text="Адрес электронной почты" forwardedRef={this.emailRef}/>
        <Switch text="Подписаться на рассылку" forwardedRef={this.switchRef}/>
        <Button text={buttonText} click={this.send} />
      </div>
    );
  }
}

export default App;
