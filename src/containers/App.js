import React, {Component} from 'react';
import './App.css';
import Field from '../components/Field/Field';
import Reset from '../components/Reset/Reset';
import Tries from '../components/Tries/Tries';

class App extends Component {
    state = {
        cells: [],
        tries: 0,
        status: true
    };

    generateCellsArray = () => {
        let cells = [];
        for (let c = 0; c < 36; c++) {
            let cell = {
                hasItem: false,
                cellClass: ['Cell'],
                id: c + 1
            };

            cells.push(cell);
        }
        return cells;
    };

    setObjectToFind = () => {
        let cells = this.generateCellsArray();
        let randomCell = Math.floor(Math.random() * cells.length);
        cells[randomCell].hasItem = true;
        cells[randomCell].cellClass.push('choosen');

        return cells;
    };

    componentDidMount = () => {
        let cells = this.setObjectToFind();
        this.setState({cells});
    };

    checkCell = (id) => {
        let cells = [...this.state.cells];
        let index = cells.findIndex(c => c.id === id);
        let cell = {...this.state.cells[index]};
        let cellClass = [...cell.cellClass];
        let tries = this.state.tries;

        if (!cellClass.includes('selected') && this.state.status) {
            cellClass.push('selected');
            cell.cellClass = cellClass;
            cells[index] = cell;
            tries++;
            if (cellClass.includes('choosen')) {
                this.setState({status: false});
            }
        }

        this.setState({cells, tries});
    };

    onReset = () => {
        let cells = this.setObjectToFind();
        let tries = this.state.tries;
        tries = 0;
        this.setState({cells, tries, status: true})
    };

    render() {
        return (
            <div className="App">
                <Field cells={this.state.cells} cellClass={this.state.cells.cellClass} click={this.checkCell}/>
                <Reset reset={this.onReset}/>
                <Tries tries={this.state.tries}/>
            </div>
        );
    }
}

export default App;
