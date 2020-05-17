/**
 * 文章列表组件
 * ArticleList.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Card, Form, Button, Input, Select, DatePicker, List } from 'antd';
import { AiOutlineSearch, AiOutlineCloseCircle, AiOutlineMessage, AiOutlineLike, AiOutlineStar } from 'react-icons/ai';
import { Black } from '@constants';
import http from '@http';
import './style.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

export default class ArticleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listData: [],
		};
	}

	// 搜索
	onFinish = () => {};

	// 搜索失败
	onFinishFailed = () => {};

	componentDidMount() {
		http({
			url: '/articleList',
			method: 'GET',
		}).then(res => {
			this.setState({
				listData: res.data,
			});
		});
	}

	render() {
		const IconText = ({ icon, text }) => (
			<span>
				{React.createElement(icon, { style: { marginRight: 8 } })}
				{text}
			</span>
		);

		return (
			<div>
				<Card>
					<Form layout="inline" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
						<Form.Item label="文章标题" title="articleTitle">
							<Input placeholder="请输入文章标题" />
						</Form.Item>

						<Form.Item label="文章内容" title="articleContent">
							<Input placeholder="请输入文章内容" />
						</Form.Item>

						<Form.Item label="文章类型" title="articleType">
							<Select defaultValue="lucy" style={{ width: 120 }} allowClear>
								<Option value="lucy">Lucy</Option>
							</Select>
						</Form.Item>
						<Form.Item label="文章标签" title="articleTag">
							<Select defaultValue="lucy" style={{ width: 120 }} allowClear>
								<Option value="lucy">Lucy</Option>
							</Select>
						</Form.Item>
						<Form.Item label="发布时间" title="publishTime">
							<RangePicker />
						</Form.Item>
						<Form.Item title="search">
							<Button type="primary" shape="round" icon={<AiOutlineSearch />}>
								搜索
							</Button>
							{Black}
							<Button shape="round" icon={<AiOutlineCloseCircle />}>
								重置
							</Button>
						</Form.Item>
					</Form>
				</Card>
				<Card style={{ marginTop: '20px' }}>
					<List
						style={{ height: '100%' }}
						itemLayout="vertical"
						size="large"
						pagination={{
							onChange: page => {
								console.log(page);
							},
							pageSize: 3,
						}}
						dataSource={this.state.listData}
						renderItem={item => (
							<List.Item
								key={item.title}
								actions={[
									<IconText icon={AiOutlineStar} text="156" key="list-vertical-star-o" />,
									<IconText icon={AiOutlineLike} text="156" key="list-vertical-like-o" />,
									<IconText icon={AiOutlineMessage} text="2" key="list-vertical-message" />,
								]}
								extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
								<List.Item.Meta title={<a href={item.href}>{item.title}</a>} description={item.description} />
								{item.content}
							</List.Item>
						)}
					/>
				</Card>
			</div>
		);
	}
}
