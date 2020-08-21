/**
 * 简历管理组件
 * Resume.js
 * @author wangbo
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Row, Col, Card, Descriptions, Button } from 'antd';
import CustomBreadcrumb from '@components/CustomBreadcrumb';
import {
    AiFillPlusSquare,
    AiOutlineMail,
    AiOutlineMobile,
    AiOutlineMan,
    AiOutlineWoman,
    AiOutlineZhihu,
    AiOutlineGithub,
    AiOutlineSmile,
    AiOutlineFire,
    AiOutlineHourglass,
    AiOutlineSchedule,
    AiOutlineHome,
    AiOutlineWechat,
    AiOutlineDelete
} from 'react-icons/ai';
import './style.less';

export default class Resume extends Component {
    render() {
        const basicInfo = {
            name: '王博',
            gender: 'm',
            age: 26,
            birth: '1994-10',
            mobile: 18392012332,
            email: 'bo.wang1016@outlook.com',
            jobStatus: 'inline',
            wechat: 18392012333,
            workTime: 2,
            address: '陕西省西安'
        };
        return (
            <div className="resume-area">
                <CustomBreadcrumb arr={['简历管理']} />

                <Row>
                    <Col span={18} push={0}>
                        <Card>
                            <BasicInfo {...basicInfo} />
                            <div className="resume-area-item">
                                <TitleInfo title="个人优势" />
                                <TitleInfo title="期望职位" />
                                <TitleInfo title="工作经历" />
                                <TitleInfo title="项目经历" />
                                <TitleInfo title="教育经历" />
                                <TitleInfo title="社交信息" />
                            </div>
                        </Card>
                    </Col>
                    <Col span={5} push={1}>
                        <Card>
                            <h4>附件管理</h4>
                            <p>
                                <span>简历名称</span>
                                <span>
                                    <AiOutlineDelete />
                                </span>
                            </p>
                            <Button style={{ width: '100%' }}>上传简历</Button>
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
    const TitleInfo = (
        <span className="name">
            {name}
            <span className="gender">{gender === 'm' ? <AiOutlineMan /> : <AiOutlineWoman />}</span>
            <span className="view-resume">预览简历</span>
        </span>
    );
    const itemArray = [
        {
            icon: <AiOutlineSmile />,
            label: '生日',
            value: birth
        },
        {
            icon: <AiOutlineFire />,
            label: '年龄',
            value: age
        },
        {
            icon: <AiOutlineMobile />,
            label: '手机号',
            value: mobile
        },
        {
            icon: <AiOutlineHourglass />,
            label: '求职状态',
            value: jobStatus
        },
        {
            icon: <AiOutlineMail />,
            label: '邮箱',
            value: email
        },
        {
            icon: <AiOutlineSchedule />,
            label: '工作经验',
            value: workTime
        },
        {
            icon: <AiOutlineHome />,
            label: '地址',
            value: address
        },
        {
            icon: <AiOutlineWechat />,
            label: '微信',
            value: wechat
        },
        {
            icon: <AiOutlineZhihu />,
            label: '知乎',
            value: address
        },
        {
            icon: <AiOutlineGithub />,
            label: 'Github',
            value: wechat
        }
    ];
    return (
        <Descriptions title={TitleInfo} className="basic-info">
            {itemArray.map(item => (
                <Descriptions.Item
                    key={item.value}
                    label={
                        <span className="info-label">
                            {item.icon}
                            {item.label}
                        </span>
                    }>
                    {item.value}
                </Descriptions.Item>
            ))}
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
