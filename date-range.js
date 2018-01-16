import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { DatePicker,LocaleProvider } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

class screen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate:moment(),
			endDate:moment()
		};
	}
	onChange(value, dateString) {
		console.log('Selected Time: ', value);
		console.log('Formatted Selected Time: ', dateString);
	}
	
	onOk(value) {
		console.log('onOk: ', value);
		let obj={
			startDate:value[0],
			endDate:value[1]
		};
		this.setState(obj);
		this.props.getDate(obj);
	}
	
	render(){
		return (
			<div className="row">
				<div className="col-md-12 col-xs-12">
					<LocaleProvider locale={zh_CN}>
						<RangePicker
							showTime={{ format: 'HH:mm' }}
							format="YYYY-MM-DD HH:mm"
							size="large"
							defaultValue={[this.state.startDate,this.state.endDate]}
							placeholder={['startDate', 'endDate']}
							onChange={this.onChange.bind(this)}
							onOk={this.onOk.bind(this)}
						/>
					</LocaleProvider>
				</div>
			</div>
		)
	}
}

export default screen