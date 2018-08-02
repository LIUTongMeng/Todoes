import ListItem from './components/Item'
import './index.less'
export default class List extends React.PureComponent {
    state={
        data:this.props.data || []
    }
    
    render() {
        console.log({...this.props})
        return (
            <ul className={classnames({
                'todo-list' : true
            })}>
                <ListItem 
                    data={this.props.data} 
                    onComplete = {this.props.onComplete}
                    onCancelComplete = {this.props.onCancelComplete}
                    onRemove = {this.props.onRemove}
                    onMouseOut={this.props.onMouseOut}/>
            </ul>)
    }
}