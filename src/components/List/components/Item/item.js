import { parse } from "path";

// import CheckboxItem from './Checkbox'
export default class ListItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showDel:false
        }

        this.onComplete = this.onComplete.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
        this.onMouseOver = this.onMouseOver.bind(this)
    }

    onComplete(e) {
        const value = e.target.value,
            checked = e.target.checked;
        if (checked) {
            this.props.onComplete(value);
        } else {
            this.props.onCancelComplete(value)
        }
    }

    onRemove(e) {
        let value = e.target.dataset['index'];
        if(value) {
            value = parseInt(value);
            this.props.onRemove(value);
        }
    }

    onMouseOver(key,e) {
        this.setState({
            showDel:key
        })
    }

    onMouseOut(key, e) {
        this.setState({
            showDel:''
        })
    }

    render() {
        const data = this.props.data,
              showDel = this.state.showDel;
        return (
            <React.Fragment>
                {
                    data.map((item, index) => <li key={item.key} data-key={item.key} onMouseEnter={this.onMouseOver.bind(this, item.key)} onMouseLeave={this.onMouseOut.bind(this, item.key)}>
                        <input type='checkbox' value={item.key} checked={item.isRemove} onChange={this.onComplete} />
                        <span style={{ paddingLeft: '0.75rem' }}
                            className={classnames({
                                'content-delete': item.isRemove === true
                            })}
                        >{item.task || 'dddd'}</span>
                        {
                            showDel === item.key ? <span className={classnames({
                                'remove-btn': true
                            })} data-index={item.key} onClick={this.onRemove}>X</span> : null
                        }
                        
                    </li>)
                }
            </React.Fragment>

        )
    }
}