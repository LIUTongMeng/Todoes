// 组件包含 input  删除 下拉按钮
import InputItem from './components/InputItem'
import DropdownItem from './components/DropdownItem'
// import RemoveItem from './components/RemoveItem'
import './index.less'
export default class Input extends React.PureComponent {
    render() {
        return (
            <div className="input-search">
                <div className="dropdown-item">
                    <DropdownItem onCompleteAll={this.props.onCompleteAll} />
                </div>
                <div className="input-item">
                    <InputItem onKeyPress={this.props.onKeyPress} />
                </div>
            </div>
        )
    }
}
