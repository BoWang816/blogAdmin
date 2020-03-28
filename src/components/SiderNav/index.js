/**
 * index.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */
import React from 'react'
import { MENUS } from "@constants";
import CustomMenu from "../CustomerMenu";

class SiderNav extends React.Component {
	render() {

		return (
			<div style={{ height: '100vh',overflowY:'scroll' }}>
				<div style={styles.logo}>wb's blog Admin</div>
				<CustomMenu menus={MENUS}/>
			</div>
		)
	}
}

const styles = {
	logo: {
		height: '32px',
		color: '#FFF',
		fontSize: '20px',
		textAlign: 'center',
		margin: '16px'
	}
};

export default SiderNav;
