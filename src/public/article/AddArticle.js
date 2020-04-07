/**
 * 新增文章组件
 * AddArticle.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Card, Row, Col, BackTop, Form, Input, Button, Select, Checkbox, DatePicker, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import CustomBreadcrumb from '@components/CustomBreadcrumb';
import { Black } from '@constants';
import './style.less';

const { Option } = Select;
const { TextArea } = Input;

export default class ArticleList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty(),
		};
	}

	// 编辑文章
	onEditorStateChange = editorState => {
		this.setState({
			editorState,
		});
	};

	// 上传图片
	uploadImageCallBack = () => {};

	render() {
		const { editorState } = this.state;
		const fileList = [];
		const props2 = {
			accept: 'image/*',
			action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
			listType: 'picture',
			defaultFileList: [...fileList],
			className: 'upload-list-inline',
		};

		return (
			<div>
				<CustomBreadcrumb arr={['文章', '新增文章']} />
				<Card>
					<Row gutter={10}>
						<Col span={12}>
							<Editor
								editorState={editorState}
								onEditorStateChange={this.onEditorStateChange}
								onContentStateChange={this.onContentStateChange}
								wrapperClassName="wrapper-class"
								editorClassName="editor-class"
								toolbarClassName="toolbar-class"
								localization={{ locale: 'zh' }}
								toolbar={{
									image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
								}}
							/>
						</Col>
						<Col span={12}>
							<Form name="basic" initialValues={{ remember: true }} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
								<Form.Item label="文章标题" name="articleTitle">
									<Input placeholder="文章标题" />
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
								<Form.Item label="定时发布" name="isPublish">
									<Checkbox />
								</Form.Item>
								<Form.Item label="发布时间" name="publishTime">
									<DatePicker format="YYYY-MM-DD HH:mm:ss" />
								</Form.Item>
								<Form.Item label="文章封面" name="articleCover">
									<Upload {...props2}>
										<Button>
											<UploadOutlined /> Upload
										</Button>
									</Upload>
								</Form.Item>
								<Form.Item label="文章摘要" name="articleAbstract">
									<TextArea autoSize={{ minRows: 4, maxRows: 6 }} placeholder="文章摘要" />
								</Form.Item>
								<Form.Item name="search">
									<Button type="primary" shape="round">
										发布
									</Button>
									{Black}
									<Button shape="round">保存为草稿</Button>
									{Black}
									<Button shape="round">重置</Button>
								</Form.Item>
							</Form>
						</Col>
					</Row>
				</Card>
				<Card bordered={false} className="card-item">
					<Row gutter={10}>
						<Col span={12}>
							<Card title="同步转换HTML" bordered={false} style={{ minHeight: 200 }}>
								{editorState && draftToHtml(convertToRaw(editorState.getCurrentContent()))}
							</Card>
						</Col>
						<Col span={12}>
							<Card title="同步转换MarkDown" bordered={false} style={{ minHeight: 200 }}>
								{editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
							</Card>
						</Col>
					</Row>
				</Card>

				<BackTop visibilityHeight={200} style={{ right: 50 }} />
			</div>
		);
	}
}
