/**
 * 文章标签组件
 * ArticleTags.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
// import { Link } from 'react-router-dom';
import CustomBreadcrumb from '@components/CustomBreadcrumb';
import { Form, Input, Card, Badge, Modal, Select, Tag, Button } from 'antd';
import { Chart, Axis, Geom, Coord, Label, Legend } from 'bizcharts';
import { TwitterOutlined, SettingOutlined } from '@ant-design/icons';
import { View } from '@antv/data-set';
import { TAG_COLOR } from '@constants';

import './style.less';

const { Option } = Select;

@observer
class ArticleTags extends Component {
	// 是否显示编辑标签弹出框，默认不显示
	@observable
	showDialog = false;

	// 编辑中的标签
	editTag = '';

	/**
	 * 显示编辑标签弹框
	 */
	showTagManageDialog = () => {
		this.showDialog = true;
	};

	/**
	 * 保存标签
	 */
	handleSaveTag = () => {
		this.handleCancel();
	};

	/**
	 * 关闭弹框
	 */
	handleCancel = () => {
		this.showDialog = false;
	};

	/**
	 * 删除标签
	 * @param value
	 */
	deleteTag = value => {
		console.log(value);
	};

	render() {
		const tagsList = [
			{
				id: 1,
				name: 'CSS',
				link: '/home/blogTag/css',
				articleCount: 20,
			},
			{
				id: 2,
				name: 'HTML',
				link: '/home/blogTag/html',
				articleCount: 1,
			},
			{
				id: 3,
				name: 'Charles',
				link: '/home/blogTag/Charles',
				articleCount: 9,
			},
			{
				id: 4,
				name: 'Webpack',
				link: '/home/blogTag/webpack',
				articleCount: 5,
			},
			{
				id: 5,
				name: 'Git',
				link: '/home/blogTag/git',
				articleCount: 30,
			},
			{
				id: 6,
				name: 'JavaScript',
				link: '/home/blogTag/javascript',
				articleCount: 10,
			},
			{
				id: 7,
				name: 'Jenkins',
				link: '/home/blogTag/jenkins',
				articleCount: 11,
			},
			{
				id: 8,
				name: 'Linux',
				link: '/home/blogTag/linux',
				articleCount: 9,
			},
			{
				id: 9,
				name: 'Nginx',
				link: '/home/blogTag/nginx',
				articleCount: 10,
			},
		];

		const dv3 = new View();

		dv3.source(tagsList).transform({
			type: 'percent',
			field: 'articleCount',
			dimension: 'name',
			as: 'percent',
		});

		const cols3 = {
			percent: {
				formatter: val => {
					return `${(val * 100).toFixed(2)}%`;
				},
			},
		};
		return (
			<div>
				<CustomBreadcrumb arr={['文章', '标签']} />
				<Card>
					<Button type="primary" shape="round" style={{ margin: '0 10px 20px 0' }} icon={<SettingOutlined />} onClick={this.showTagManageDialog}>
						标签管理
					</Button>

					{tagsList.map(item => {
						return (
							<Tag
								icon={<TwitterOutlined />}
								key={item.id}
								onChange={this.showTagManageDialog}
								color={TAG_COLOR[Math.floor(Math.random() * 10 + 1)]}
								style={{ padding: '4px 8px', margin: '0 10px 20px 0' }}
								closable
								onClose={this.deleteTag}>
								<Badge count={item.articleCount}>
									{/* <Link to={item.link}>{item.name}</Link> */}
									{item.name}
								</Badge>
							</Tag>
						);
					})}
				</Card>
				<Chart height={500} data={dv3} scale={cols3} padding={[80, 100, 80, 80]} forceFit>
					<Coord type="theta" radius={0.75} />
					<Axis name="percent" />
					<Legend position="right" offsetY={-80} />
					<Geom
						type="intervalStack"
						position="percent"
						color="name"
						tooltip={[
							'name * percent',
							(name, percent) => {
								return {
									name,
									value: `${percent * 100}%`,
								};
							},
						]}
						style={{ lineWidth: 1, stroke: '#fff' }}>
						<Label
							content="percent"
							formatter={(val, item) => {
								return `${item.point.name}: ${val}`;
							}}
						/>
					</Geom>
				</Chart>

				<Modal visible={this.showDialog} title="标签管理" onOk={this.handleSaveTag} onCancel={this.handleCancel} cancelText="取消" okText="保存">
					<TagManage tagList={tagsList} />
				</Modal>
			</div>
		);
	}
}

function TagManage(props) {
	const { tagList, onFinish, onFinishFailed, handleChangeTag, handleInputNewTag } = props;
	return (
		<Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
			<Form.Item label="标签名称" name="tagName" rules={[{ required: true, message: '请输入标签名称' }]}>
				<Input placeholder="请输入标签名称" onChange={handleInputNewTag} />
			</Form.Item>
			<Form.Item label="已有标签" name="tagList" rules={[{ required: true, message: '请选择标签' }]}>
				<Select placeholder="请选择标签名称" defaultValue={tagList[0] && tagList[0].id} onChange={handleChangeTag}>
					{tagList.map(item => {
						return (
							<Option key={item.id} value={item.id}>
								{item.name}
							</Option>
						);
					})}
				</Select>
			</Form.Item>
			<Form.Item label="新的标签名称" name="newTagName" rules={[{ required: true, message: '请输入新的标签名称' }]}>
				<Input placeholder="请输入新的标签名称" onChange={handleInputNewTag} />
			</Form.Item>
		</Form>
	);
}

export default ArticleTags;
