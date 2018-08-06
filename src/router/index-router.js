import {browserHistory, Router, Route} from 'react-router'
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer';
export default class Todoes extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            searchValue: null
        }
        this.onAddData = this.onAddData.bind(this)
        this.onCompleteData = this.onCompleteData.bind(this)
        this.onCancelCompleteData = this.onCancelCompleteData.bind(this)
        this.onRemoveData = this.onRemoveData.bind(this)
        this.onCompleteAllData = this.onCompleteAllData.bind(this)
        this.onSearch = this.onSearch.bind(this)
    }
    onAddData(task) {
        const data = [].concat(this.state.data)
        data.push({
            key: `temp_key_${data.length}`,
            task,
            isRemove: false
        })
        this.setState({ data })
    }

    onCompleteData(key) {
        const data = [].concat(this.state.data),
            index = data.findIndex(item => item.key === key);
        data[index].isRemove = true;
        this.setState({ data })
    }

    onCompleteAllData() {
        const data = [].concat(this.state.data),
            hasActiveTask = (data.filter(item => item.isRemove === false) || []).length;
            // hasActiveTask === 0  无正在处理的任务这 isRemove 设为 false 
            // hasActiveTask > 0  这 isRemove 设为 true 
        const newData = data.map(item => {
            return {
            ...item,
            isRemove: hasActiveTask ? true  : false
        }})
        console.log(hasActiveTask,newData)
        this.setState({ data : newData })
    }

    onCancelCompleteData(key) {
        const data = [].concat(this.state.data),
            index = data.findIndex(item => item.key === key);
        data[index].isRemove = false;
        this.setState({ data })
    }

    onRemoveData(key) {
        const data = [].concat(this.state.data),
            index = data.findIndex(item => item.key === key);
        data.splice(index, 1)
        this.setState({ data })
    }

    onSearch(value) {
        this.setState({
            searchValue: value === '' ? null : value === 'active' ? false : true
        })
    }

    render() {
        const { data, searchValue } = this.state
        return (
            <Router>
                {/* 标题 */}
                <Route path='title' component={Title} />
                {/* 输入框 */}
                <Input onKeyPress={this.onAddData} onCompleteAll={this.onCompleteAllData} />
                {/* 列表 */}
                <List data={data.filter(item => searchValue === null || item.isRemove === searchValue)}
                    onComplete={this.onCompleteData}
                    onCancelComplete={this.onCancelCompleteData}
                    onRemove={this.onRemoveData} />
                {/* 底部操作 */}
                <Footer data={data} onSearch={this.onSearch} />
            </Router>
        )
    }
}