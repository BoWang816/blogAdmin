/**
 * 新增文章组件
 * operateArticle.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Card, Row, Col, Form, Input, Button, Select, Checkbox, DatePicker, Upload } from 'antd';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import Editor from 'for-editor';
import BackTop from '@components/BackTop';
import CustomBreadcrumb from '@components/CustomBreadcrumb';
import { Black } from '@constants';
import './style.less';

const { Option } = Select;
const { TextArea } = Input;

export default class OperateArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: '',
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
            <>
                <CustomBreadcrumb arr={['文章', '新增文章']} />
                <Card>
                    <Row gutter={10}>
                        <Col span={10}>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}>
                                <Form.Item label="文章标题" name="articleTitle">
                                    <Input placeholder="文章标题" style={{ width: '80%' }} />
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
                                            <AiOutlineCloudUpload /> Upload
                                        </Button>
                                    </Upload>
                                </Form.Item>
                                <Form.Item label="文章摘要" name="articleAbstract">
                                    <TextArea
                                        autoSize={{ minRows: 4, maxRows: 6 }}
                                        placeholder="文章摘要"
                                        style={{ width: '80%' }}
                                    />
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
                        <Col span={14}>
                            <Editor
                                value={editorState}
                                lineNum={false}
                                subfield
                                preview
                                onChange={this.onEditorStateChange}
                            />
                        </Col>
                    </Row>
                </Card>
                <BackTop />
            </>
        );
    }
}
