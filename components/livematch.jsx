import React from 'react'

class LiveMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {match: this.props.match};
    }

    componentWillReceiveProps(nextProps) {
        this.state = nextProps.match;
    }

    render() {
        var map = this.state.map ? this.state.map.name : "Loading..";
        return (
            <div>
                Karta: {map}
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        )
    }
}

export default LiveMatch
