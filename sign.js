import React,{Component} from 'react';

class Sign extends Component{
	constructor(props){
		super(props);
		this.state={
			style:this.props.val ? {display:"inline-block"} : {display:"none"}
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			style:nextProps.val ? {display:"inline-block"} : {display:"none"}
		})
	}
	close(){
		this.props.close(this.props.name);
	}
	
	render(){
		return (
			<div className="sign" style={this.state.style}>
				{this.props.val}<span onClick={this.close.bind(this)}>x</span>
			</div>
		)
	}
}

export default Sign