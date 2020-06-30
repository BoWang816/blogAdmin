/**
 * 文章类型组件
 * ArticleTypes.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import CustomBreadcrumb from '@components/CustomBreadcrumb';
import { Button, Card, Table, Form, Input, Modal, Space } from 'antd';
import { AiOutlinePlus, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './style.less';

@observer
class ArticleTypes extends Component {
    @observable
    showDialog = false;

    // 编辑中的分类
    typeInfo = null;

    /**
     * 显示编辑分类弹框
     */
    showTypeManageDialog = (e, item) => {
        e.stopPropagation();
        this.typeInfo = item;

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
     * 删除类型
     * @param e
     * @param id
     */
    deleteType = (e, id) => {
        e.stopPropagation();
        console.log(id);
    };

    /**
     * 编辑类型
     * @param e
     * @param item
     */
    editType = (e, item) => {
        e.stopPropagation();
        this.showTypeManageDialog(item);
    };

    render() {
        const typeList = [
            {
                id: 1,
                name: 'CSS',
                link: '/home/blogTag/css',
                articleCount: 20,
                desc: '类型描述'
            },
            {
                id: 2,
                name: 'HTML',
                link: '/home/blogTag/html',
                articleCount: 1,
                desc: '类型描述'
            },
            {
                id: 3,
                name: 'Charles',
                link: '/home/blogTag/Charles',
                articleCount: 9,
                desc: '类型描述'
            },
            {
                id: 4,
                name: 'Webpack',
                link: '/home/blogTag/webpack',
                articleCount: 5,
                desc: '类型描述'
            },
            {
                id: 5,
                name: 'Git',
                link: '/home/blogTag/git',
                articleCount: 30,
                desc: '类型描述'
            },
            {
                id: 6,
                name: 'JavaScript',
                link: '/home/blogTag/javascript',
                articleCount: 10,
                desc: '类型描述'
            },
            {
                id: 7,
                name: 'Jenkins',
                link: '/home/blogTag/jenkins',
                articleCount: 11,
                desc: '类型描述'
            },
            {
                id: 8,
                name: 'Linux',
                link: '/home/blogTag/linux',
                articleCount: 9,
                desc: ''
            },
            {
                id: 9,
                name: 'Nginx',
                link: '/home/blogTag/nginx',
                articleCount: 10,
                desc: '类型描述'
            }
        ];
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>
            },
            {
                title: 'articleCount',
                dataIndex: 'articleCount',
                key: 'articleCount'
            },
            {
                title: 'desc',
                dataIndex: 'desc',
                key: 'desc'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle" className="operate-icon">
                        <AiOutlineEdit onClick={e => this.editType(e, record)} />
                        <AiOutlineDelete onClick={e => this.deleteType(e, record.id)} />
                    </Space>
                )
            }
        ];

        return (
            <div>
                <CustomBreadcrumb arr={['文章', '分类']} />
                <Card>
                    <Button
                        type="primary"
                        shape="round"
                        style={{ margin: '0 10px 20px 0' }}
                        icon={<AiOutlinePlus />}
                        onClick={e => this.showTypeManageDialog(e)}>
                        新增分类
                    </Button>
                    <Table columns={columns} dataSource={typeList} />
                </Card>
                <Modal
                    visible={this.showDialog}
                    title={this.typeInfo ? '编辑分类' : '新增分类'}
                    onOk={this.handleSaveTag}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="保存">
                    <Form name="basic" initialValues={{ remember: true }} onFinish={null} onFinishFailed={null}>
                        <Form.Item
                            label="分类名称"
                            name="typeName"
                            rules={[{ required: true, message: '请输入分类名称' }]}>
                            <Input
                                placeholder="请输入分类名称"
                                value={this.typeInfo && this.typeInfo.name}
                                onChange={null}
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default ArticleTypes;
