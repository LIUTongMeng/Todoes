const delBtn = require('../assets/icons/icon_detaildown.svg')
console.log(delBtn)
export default class DropdownItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state={
            checked:false
        }
        this.onClick = this.onClick.bind(this)
    }
    
    onClick() {
        this.props.onCompleteAll()
    }

    render() {
        return (
            <div>
              <img src={delBtn} onClick={this.onClick}/>
            </div>
        )
    }
} 
