/**
 * 文章列表组件
 * ArticleList.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Card, Form, Button, Input, Select, DatePicker, List } from 'antd';
import { SearchOutlined, CloseCircleOutlined, MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;
const blank = ' ';

export default class ArticleList extends Component {
	// 搜索
	onFinish = () => {};

	// 搜索失败
	onFinishFailed = () => {};

	render() {
		const IconText = ({ icon, text }) => (
			<span>
				{React.createElement(icon, { style: { marginRight: 8 } })}
				{text}
			</span>
		);

		const listData = [];
		for (let i = 0; i < 23; i++) {
			listData.push({
				href: 'http://ant.design',
				title: `ant design part ${i}`,
				avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
				description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
				content:
					'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
			});
		}

		return (
			<div>
				<Card>
					<Form name="basic" layout="inline" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
						<Form.Item label="文章标题" name="articleTitle">
							<Input />
						</Form.Item>

						<Form.Item label="文章内容" name="articleContent">
							<Input />
						</Form.Item>

						<Form.Item label="文章类型" name="articleType">
							<Select defaultValue="lucy" style={{ width: 120 }} allowClear>
								<Option value="lucy">Lucy</Option>
							</Select>
						</Form.Item>
						<Form.Item label="文章标签" name="articleTag">
							<Select defaultValue="lucy" style={{ width: 120 }} allowClear>
								<Option value="lucy">Lucy</Option>
							</Select>
						</Form.Item>
						<Form.Item label="发布时间" name="publishTime">
							<RangePicker />
						</Form.Item>
						<Form.Item name="search">
							<Button type="primary" shape="round" icon={<SearchOutlined />}>
								搜索
							</Button>
							{blank}
							<Button shape="round" icon={<CloseCircleOutlined />}>
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
						dataSource={listData}
						renderItem={item => (
							<List.Item
								key={item.title}
								actions={[
									<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
									<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
									<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
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
