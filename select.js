import React,{Component} from 'react';

class Select extends Component{
	constructor(props){
		super(props);
		this.state={
			data:this.props.data,
			val:this.props.val || "全部"
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			data:nextProps.data,
			val:nextProps.val || "全部"
		})
	}
	
	render(){
		let [data,name]=[this.state.data,this.props.name];
		let arr=[];
		data[name].map(function(val,idx){
			arr.push(<option value={val} key={idx}>{val}</option>);
		});
		return (
			<div className="g-select">
				<span>报警{this.props.text}</span>
				<select name={this.props.name} id="" className="form-control ng-pristine ng-valid ng-touched" onChange={this.props.onSelect} value={this.state.val}>
					<option value="全部">全部</option>
					{arr}
				</select>
			</div>
		)
	}
}

export default Select