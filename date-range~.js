import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class screen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate:moment(),
			endDate:moment()
		};
	}
	handleState(range){
		let obj={
			startDate:range
		};
		this.setState(obj);
		this.props.getDate(obj);
	}
	handleEnd(range){
		let obj={
			endDate:range
		};
		this.setState(obj);
		this.props.getDate(obj);
	}
	
	render(){
		return (
			<div className="row">
				<div className="col-md-6 g-range">
					<span>开始时间</span>
					<DatePicker
						lang="cn"
						showTimeSelect
						dateFormat="YYYY-MM-DD HH:MM:00"
						selected={this.state.startDate}
						onChange={this.handleState.bind(this)}
					/>
				</div>
				<div className="col-md-6 g-range">
					<span>结束时间</span>
					<DatePicker
						lang="cn"
						showTimeSelect
						dateFormat="YYYY-MM-DD HH:MM:00"
						selected={this.state.endDate}
						onChange={this.handleEnd.bind(this)}
					/>
				</div>
			</div>
		)
	}
}

export default screen