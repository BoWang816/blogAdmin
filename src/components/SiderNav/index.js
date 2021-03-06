/**
 * index.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React from 'react';
import { MENUS } from '@constants';
import { AiOutlineHeart } from 'react-icons/ai';
import CustomMenu from '../CustomerMenu';

const styles = {
    logo: {
        height: '32px',
        color: '#FFF',
        fontSize: '20px',
        textAlign: 'center',
        margin: '16px'
    }
};

class SiderNav extends React.Component {
    render() {
        return (
            <div
                style={{
                    height: '100vh',
                    overflowY: 'scroll'
                }}>
                <div style={styles.logo}>{!this.props.collapsed ? 'blog Admin' : <AiOutlineHeart />}</div>
                <CustomMenu menus={MENUS} collapsed={this.props.collapsed} />
            </div>
        );
    }
}

export default SiderNav;
