import React, {Component} from 'react';
import FlipCard from "./app/component/FlipCardComponent";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FlipCard />
            </div>
        );
    }
}

export default App;

