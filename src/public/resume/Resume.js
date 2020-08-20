/**
 * 简历管理组件
 * Resume.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Row, Col, Card, Descriptions } from 'antd';
import CustomBreadcrumb from '@components/CustomBreadcrumb';
import { AiFillPlusSquare } from 'react-icons/ai';
import './style.less';

export default class Resume extends Component {
    render() {
        return (
            <div className="resume-area">
                <CustomBreadcrumb arr={['简历管理']} />

                <Row>
                    <Col span={18} push={0}>
                        <Card bodyStyle={{ height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
                            <BasicInfo />
                            <TitleInfo title="个人优势" />
                            <TitleInfo title="期望职位" />
                            <TitleInfo title="工作经历" />
                            <TitleInfo title="项目经历" />
                            <TitleInfo title="教育经历" />
                            <TitleInfo title="社交信息" />
                        </Card>
                    </Col>
                    <Col span={5} push={1}>
                        <Card>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

/**
 * 基本信息组件
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const BasicInfo = props => {
    const { name, gender, birth, age, mobile, jobStatus, email, wechat, workTime, address } = props;
    return (
        <Descriptions title="User Info" className="basic-info">
            <Descriptions.Item label="UserName">{name}</Descriptions.Item>
            <Descriptions.Item label="Telephone">{mobile}</Descriptions.Item>
            <Descriptions.Item label="Live">{address}</Descriptions.Item>
            <Descriptions.Item label="Live">{birth}</Descriptions.Item>
            <Descriptions.Item label="Live">{age}</Descriptions.Item>
            <Descriptions.Item label="Live">{jobStatus}</Descriptions.Item>
            <Descriptions.Item label="Live">{email}</Descriptions.Item>
            <Descriptions.Item label="Live">{wechat}</Descriptions.Item>
            <Descriptions.Item label="Live">{workTime}</Descriptions.Item>
            <Descriptions.Item label="Remark">{gender}</Descriptions.Item>
            <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
        </Descriptions>
    );
};

/**
 * 标题组件
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const TitleInfo = props => {
    const { title } = props;
    return (
        <>
            {title && (
                <div className="item-info-area">
                    <h3 className="item-title">
                        <span>{title}</span>
                        <span className="add-area">
                            <AiFillPlusSquare />
                            <span className="add-area-text">添加</span>
                        </span>
                    </h3>

                    <section>
                        <Row>
                            <Col>设置</Col>
                        </Row>
                    </section>
                </div>
            )}
        </>
    );
};
