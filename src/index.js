import React from 'react';
import ReactDOM from 'react-dom';
require('./less/index');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ' '
        };
    }

    ClickBtZero()  {
        const temp = this.state.text;
        this.setState({text: temp  + '0'});
    }

    ClickBtOne()  {
        const temp = this.state.text;
        this.setState({text: temp + '1'});
    }

    ClickBtSecond() {
        const temp = this.state.text;
        this.setState({text: temp + '2'});
    }

    ClickBtThree() {
        const temp = this.state.text;
        this.setState({text: temp + '3'});
    }

    ClickBtFour() {
        const temp = this.state.text;
        this.setState({text: temp + '4'});
    }

    ClickBtFiev() {
        const temp = this.state.text;
        this.setState({text: temp + '5'});
    }

    ClickBtSix() {
        const temp = this.state.text;
        this.setState({text: temp + '6'});
    }

    ClickBtSeven() {
        const temp = this.state.text;
        this.setState({text: temp + '7'});
    }

    ClickBtIght() {
        const temp = this.state.text;
        this.setState({text: temp + '8'});
    }

    ClickBtNine() {
        const temp = this.state.text;
        this.setState({text: temp + '9'});
    }

    PlusBt() {
        const temp = this.state.text;
        this.setState({text: temp + '+'});
    }

    MinusBt() {
        const temp = this.state.text;
        this.setState({text: temp + '-'});
    }

    MulBt() {
        const temp = this.state.text;
        this.setState({text: temp + 'x'});
    }

    DivBt() {
        const temp = this.state.text;
        this.setState({text: temp + '/'});
    }

    ClickBtDot() {
        const temp = this.state.text;
        this.setState({text: temp + '\.'});
    }

    ClickBtPercent() {
        const temp = this.state.text;
        this.setState({text: temp + '%'});
    }

    Ochistka() {
        this.setState({text: ' '});
    }

    EndDelSymbol() {
        const temp = this.state.text;
        const temp2 = temp.substring(0, temp.length - 1);
        this.setState({text: temp2});
    }

    Calculate() {
        const temp = this.state.text;
        const ArrNumber = temp.split(/['\-','+''x','/','%']/);
        const operation = temp.match(/['\-','+''x','/','%']/g);

        if (ArrNumber.length === 1) {
            this.setState({text: String(ArrNumber[0])});
        }


        let Result = 0;
        switch ( operation[0] ) {
            case  '+' : { Result = parseFloat(ArrNumber[0]) + parseFloat(ArrNumber[1]); break; }
            case  '-' : { Result = parseFloat(ArrNumber[0]) - parseFloat(ArrNumber[1]); break; }
            case  'x' : { Result = parseFloat(ArrNumber[0]) * parseFloat(ArrNumber[1]); break; }
            case  '/' : { Result = parseFloat(ArrNumber[0]) / parseFloat(ArrNumber[1]); break; }
            case  '%' : { Result = parseFloat(ArrNumber[0]) / 100; break;}
            default: break;
        }

        for (let i = 1; i < operation.length; i++) {
            switch (operation[i]) {
                case '+' : { Result = Result + parseFloat(ArrNumber[i + 1]); break; }
                case '-' : { Result = Result - parseFloat(ArrNumber[i + 1]); break; }
                case 'x' : { Result = Result * parseFloat(ArrNumber[i + 1]); break; }
                case '/' : { Result = Result / parseFloat(ArrNumber[i + 1]); break; }
                case '%' : { Result = parseFloat(ArrNumber[i + 1]) / 100; break;}
                default: break;
            }
        }

        this.setState({text: Result});
    }

    inputOnChange(event) {
        const text = event.target.value;
        this.setState({text});
    }

    render() {
        return (
            <div className="Komponent" >
                <h1>Калькулятор:</h1>
                <div className="Pole">
                    <textarea wrap="PHYSICAL"  type= "text" value = {this.state.text} onChange={ this.inputOnChange.bind(this) }/>
                </div>
                <div className="but">
                    <div id="temp2">
                        <div>
                            <button id="AC"  onClick = {this.Ochistka.bind(this)}>AC</button>
                            <button  onClick = {this.EndDelSymbol.bind(this)}>Del</button>
                            <button  onClick={this.DivBt.bind(this)}>/</button>
                            <button  onClick={this.MulBt.bind(this)}>x</button>
                        </div>
                        <div>
                            <button  onClick={this.ClickBtSeven.bind(this)}>7</button>
                            <button  onClick={this.ClickBtIght.bind(this)}>8</button>
                            <button  onClick={this.ClickBtNine.bind(this)}>9</button>
                            <button  onClick={this.MinusBt.bind(this)}>-</button>
                        </div>
                        <button  onClick={this.ClickBtFour.bind(this)}>4</button>
                        <button  onClick={this.ClickBtFiev.bind(this)}>5</button>
                        <button  onClick={this.ClickBtSix.bind(this)}>6</button>
                        <button  onClick={this.PlusBt.bind(this)}>+</button>
                    </div>
                    <div id="right">
                        <div>
                            <button  onClick={this.ClickBtOne.bind(this)}>1</button>
                            <button  onClick={this.ClickBtSecond.bind(this)}>2</button>
                            <button  onClick={this.ClickBtThree.bind(this)}>3</button>
                        </div>
                        <div>
                            <button  onClick={this.ClickBtPercent.bind(this)}>%</button>
                            <button  onClick={this.ClickBtZero.bind(this)}>0</button>
                            <button  onClick={this.ClickBtDot.bind(this)}>.</button>
                        </div>
                    </div>
                    <div id="temp">
                        <button id="ravno" onClick = {this.Calculate.bind(this)}>=</button>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

