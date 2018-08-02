import "./title.less"
export default class Title extends React.PureComponent {
  constructor(props) {
      super(props)
      this.state={}
  }
  render() {
      return (
          <div className="title">{this.props.title}</div>
      )
  }
}