/**
 * 新增文章组件
 * AddArticle.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class ArticleList extends Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = e => {
		this.setState({
			visible: false,
		});
		console.log(e);
	};

	handleCancel = e => {
		this.setState({
			visible: false,
		});
		console.log(e);
	};

	render() {
		return (
			<div>
				<Button type="primary" onClick={this.showModal}>
					Open Modal
				</Button>
				<Modal title="Basic Modal" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
					<Button onClick={this.open}>再次</Button>
				</Modal>
			</div>
		);
	}
}
