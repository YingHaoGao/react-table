import React from 'react';
import { BootstrapTable,TableHeaderColumn } from 'react-bootstrap-table';

var products=[
	{
		"_id": "5a580d5c349fd8ea0066805a",
		"occurrenceTimeStamp": "2018-01-12 09:19:56",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:28.116Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1",
		],
		"level": 1,
		"title": "105灯杆向南33米",
		"created": "2018-01-12T06:49:40.441Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580d59349fd8ea00668058",
		"occurrenceTimeStamp": "2018-01-12 09:19:55",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:25.180Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南39米",
		"created": "2018-01-12T06:49:40.441Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580d74349fd8ea0066805e",
		"occurrenceTimeStamp": "2018-01-12 09:19:54",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:52.252Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南4米",
		"created": "2018-01-12T06:49:40.442Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580d71349fd8ea0066805c",
		"occurrenceTimeStamp": "2018-01-12 09:19:53",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:49.531Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南16米",
		"created": "2018-01-12T06:49:40.442Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580c70349fd8ea0066804b",
		"occurrenceTimeStamp": "2018-01-12 09:07:07",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:16:32.599Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南10米",
		"created": "2018-01-12T06:49:40.442Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580a53349fd8ea00668049",
		"occurrenceTimeStamp": "2018-01-12 09:07:05",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:07:31.247Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南18米",
		"created": "2018-01-12T06:49:40.443Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580c74349fd8ea0066804d",
		"occurrenceTimeStamp": "2018-01-12 09:07:03",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:16:36.374Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南4米",
		"created": "2018-01-12T06:49:40.443Z",
		"name": "SEG_1_7"
	},{
		"_id": "5a580d5c349fd8ea0066805a",
		"occurrenceTimeStamp": "2018-01-12 09:19:56",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:28.116Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1",
		],
		"level": 1,
		"title": "105灯杆向南33米",
		"created": "2018-01-12T06:49:40.441Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580d59349fd8ea00668058",
		"occurrenceTimeStamp": "2018-01-12 09:19:55",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:25.180Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南39米",
		"created": "2018-01-12T06:49:40.441Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580d74349fd8ea0066805e",
		"occurrenceTimeStamp": "2018-01-12 09:19:54",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:52.252Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南4米",
		"created": "2018-01-12T06:49:40.442Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580d71349fd8ea0066805c",
		"occurrenceTimeStamp": "2018-01-12 09:19:53",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:20:49.531Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南16米",
		"created": "2018-01-12T06:49:40.442Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580c70349fd8ea0066804b",
		"occurrenceTimeStamp": "2018-01-12 09:07:07",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:16:32.599Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南10米",
		"created": "2018-01-12T06:49:40.442Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580a53349fd8ea00668049",
		"occurrenceTimeStamp": "2018-01-12 09:07:05",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:07:31.247Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南18米",
		"created": "2018-01-12T06:49:40.443Z",
		"name": "SEG_1_7"
	},
	{
		"_id": "5a580c74349fd8ea0066804d",
		"occurrenceTimeStamp": "2018-01-12 09:07:03",
		"alarmType": "CABLE ALARM",
		"stamp": "未知事物",
		"system": 1,
		"resetTimeStamp": "2018-01-12T01:16:36.374Z",
		"reseter": "Admin",
		"camera": [
			"CAM_him_1"
		],
		"level": 1,
		"title": "105灯杆向南4米",
		"created": "2018-01-12T06:49:40.443Z",
		"name": "SEG_1_7"
	}
];

function priceFormatter(cell, row){
	return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

class App extends React.Component {
			// It's a data format example.
	beforeSaveCell(row, cellName, cellValue) {
		// if you dont want to save this editing, just return false to cancel it.
		console.log(row, cellName, cellValue);
	}
	afterSaveCell(row, cellName, cellValue) {
		// if you dont want to save this editing, just return false to cancel it.
		console.log(row, cellName, cellValue);
	}
	csvFileName(){
		return 'CSV.csv';
	}
	columnClassNameFormat(){
		return 'camera';
	}
	click(){
		console.log('a');
	}
	afterSearch(searchText, result){
		console.log(searchText, result);
	}
	renderCustomSearchPanel(searchField, clearBtn,defaultValue,placeholder,clearBtnClick,search){
		console.log(searchField, clearBtn,defaultValue,placeholder,clearBtnClick,search);
	}
	
	render() {
		const cellEdit = {
			mode: 'click', // click cell to edit
			blurToSave: true,
			beforeSaveCell: this.beforeSaveCell,
			nonEditableRows:function(){
				return products.filter(p => p.id <3).map(p => p.id);
			},
			afterSaveCell:this.afterSaveCell
		};
		const options = {
			prePage: 'Previous',
			afterSearch: this.afterSearch,
			// searchPanel: this.renderCustomSearchPanel
		};
		
		return (
			<BootstrapTable
				data={products}
				striped={true}
				hover={true}
			  lang="cn"
				// cellEdit={ cellEdit }
				options={options}
				version='4'
				searchPlaceholder="搜索..."
				pagination
				exportCSV
				csvFileName={ this.csvFileName }
				ignoreSinglePage
				search
			>
				<TableHeaderColumn dataField="title" isKey={true} dataSort={true}>title</TableHeaderColumn>
				<TableHeaderColumn dataField="name" dataSort={true} width="20%">Name</TableHeaderColumn>
				<TableHeaderColumn dataField="stamp" dataSort={true} width="20%">stamp</TableHeaderColumn>
				<TableHeaderColumn dataField="camera" dataSort={true} width="20%" columnClassName={this.columnClassNameFormat} click={this.click}>camera</TableHeaderColumn>
				<TableHeaderColumn dataField="created" dataSort={true} width="20%">created</TableHeaderColumn>
			</BootstrapTable>
		)
	}
}

export default App