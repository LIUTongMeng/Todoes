export default class ButtonGroup extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            queryStr:''
        };
        this.onSearch = this.onSearch.bind(this)
    }
    onSearch(e) {
        const queryStr = e.target.dataset.keyword;
        this.setState({queryStr})
        this.props.onSearch(queryStr);
    }
    render() {
        const queryStr = this.state.queryStr;
        return (
            <React.Fragment>
                <span className={classnames({
                    'active' : queryStr === ''
                })} data-keyword='' onClick={this.onSearch}>All</span>
                <span className={classnames({
                    'active' : queryStr === 'active'
                })} data-keyword='active' onClick={this.onSearch}>Active</span>
                <span className={classnames({
                    'active' : queryStr === 'completed'
                })} data-keyword='completed' onClick={this.onSearch}>Completed</span>
            </React.Fragment>
        )
    }
}