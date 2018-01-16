import React, { Component } from 'react';
import { Button,Panel } from 'react-bootstrap';
import Range from './date-range';
import Sign from './sign';
import Select from './select';

let data={
	type:[ '电缆报警','电缆故障','通讯失败','辅助输入报警','防拆开关打开' ],
	label:[ '入侵','天气','动物','垃圾'],
	zone:[ '1防区','2防区','3防区','4防区' ]
};

class panel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type:false,
			label:false,
			zone:false,
			open:false,
			startDate:new Date(),
			endDate:new Date()
		};
	}
	close(e){
		this.setState({
			[e]:false
		});
	}
	getDate(obj){
		this.setState(obj);
	}
	submit(){
		let obj={};
		let $=this.state;
		obj.type=$.type || "全部";
		obj.label=$.label || "全部";
		obj.zone=$.zone || "全部";
		obj.startDate=$.startDate;
		obj.endDate=$.endDate;
		this.setState({
			open:false
		});
		console.log(obj);
	}
	onSelect(e){
		let {value,name}=e.target;
		this.setState({
			[name]:value
		})
	}
	shouldThisPanelCloseFunction(){
		console.log("shouldThisPanelCloseFunction");
	}
	
	render(){
		return (
			<div>
				<Button className="btn-primary" onClick={() => this.setState({ open: !this.state.open })}>
					报警查询
				</Button>
				<Sign val={this.state.type} close={this.close.bind(this)} name="type" key="1"/>
				<Sign val={this.state.label} close={this.close.bind(this)} name="label" key="2"/>
				<Sign val={this.state.zone} close={this.close.bind(this)} name="zone" key="3"/>
				<br />
				<Panel id="collapsible-panel-example-1" expanded={this.state.open}
				       onToggle={this.shouldThisPanelCloseFunction}>
					<Panel.Collapse>
						<Panel.Body>
							<div className="row" style={{paddingTop:"20px"}}>
								<div className="col-md-4 col-xs-4">
									<Select data={data} name="type"
									        onSelect={this.onSelect.bind(this)}
									        val={this.state.type} text="类型"/>
								</div>
								<div className="col-md-4 col-xs-4">
									<Select data={data} name="label"
									        onSelect={this.onSelect.bind(this)}
									        val={this.state.label} text="标签"/>
								</div>
								<div className="col-md-4 col-xs-4">
									<Select data={data} name="zone"
									        onSelect={this.onSelect.bind(this)}
									        val={this.state.zone} text="防区"/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-8 col-xs-12 col-lg-4">
									<Range getDate={this.getDate.bind(this)}/>
								</div>
								<div className="col-md-4 col-xs-12">
									<button className="btn btn-success g-btn"
									        onClick={this.submit.bind(this)}>查询</button>
								</div>
							</div>
						</Panel.Body>
					</Panel.Collapse>
				</Panel>
			</div>
		)
	}
}

export default panel