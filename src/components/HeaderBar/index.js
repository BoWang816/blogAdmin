/**
 * index.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React, { Component } from 'react';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';

export default class HeaderBar extends Component {
    toggle = () => {
        this.props.onToggle();
    };

    render() {
        const { collapsed } = this.props;

        return (
            <span>
                {collapsed ? (
                    <AiOutlineMenuUnfold onClick={this.toggle} />
                ) : (
                    <AiOutlineMenuFold onClick={this.toggle} />
                )}
            </span>
        );
    }
}
