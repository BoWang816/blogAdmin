/**
 * main.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderNav from '@components/SiderNav';
import HeaderBar from '@components/HeaderBar';
import ContentMain from '@components/ContentMain';

const { Sider, Header, Content } = Layout;

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    toggle = () => {
        // console.log(this)  状态提升后，到底是谁调用的它
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed
        });
    };

    render() {
        // 设置Sider的minHeight可以使左右自适应对齐
        return (
            <div id="page">
                <Layout>
                    <Sider collapsible trigger={null} collapsed={this.state.collapsed}>
                        <SiderNav collapsed={this.state.collapsed} />
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: '0 16px' }}>
                            <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle} />
                        </Header>
                        <Content>
                            <ContentMain />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
