import ButtonGroup from './components/ButtonGroup'
import './footer.less'
export default class Footer extends React.PureComponent {
    render() {
        const data = this.props.data,
              completedData = data.filter(item => item.isRemove === true),
              lth = data.length, //所有数据长度
              completeLth = completedData.length,//任务完成长度
              uncompleteLth = lth - completeLth; 
        return (
            <div className='footer'>
                <div style={{flex:0.8}}>
                    {uncompleteLth > 1 ? `${uncompleteLth} items left` : `${uncompleteLth} item left`}
                </div>
                <div className='button-group' style={{textAlign:'center'}}>
                    <ButtonGroup onSearch={this.props.onSearch}/>
                </div>
                <div style={{flexBasis:'25%', textAlign:'right'}}>
                    {completeLth > 0 ? 'clear complated' : null}
                </div>
            </div>
        )
    }
}