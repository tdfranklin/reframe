const React = require('react');

class TimeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {now: new Date()};
    }
    componentDidMount() {
        setInterval(
            () => this.setState({now: new Date()}),
            1000
        );
    }
    render() {
        return (
            <div>Time: {this.state.now.toTimeString()}</div>
        );
    }
}

module.exports = {
    title: 'Current Time',
    route: '/time',
    view: TimeComponent,
};