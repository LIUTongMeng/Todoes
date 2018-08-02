import './assets/less/index.less'
export default class InputItem extends React.PureComponent {
    constructor(props) {
        super(props)
    }

    onKeyPress = (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            this.props.onKeyPress(e.target.value)
            this.refs.input.value = ""
        }
    }

    render() {
        return (
            <div>
                <input className='todo-input' ref='input'
                    onKeyPress={this.onKeyPress.bind(this)}
                />
            </div>
        )
    }
}
