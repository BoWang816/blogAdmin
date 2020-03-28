/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */

// 菜单列表
import React from "react";
import { HomeOutlined, DashboardOutlined, SettingOutlined, ProjectOutlined, CloudOutlined, BookOutlined, GithubOutlined, TagsOutlined, FolderOpenOutlined, DatabaseOutlined, ContactsOutlined, ReadOutlined } from '@ant-design/icons';

export const MENUS = [
	{
		title: '首页',
		icon: <HomeOutlined />,
		key: '/home'
	},
	{
		title: '监控面板',
		icon: <DashboardOutlined />,
		key: '/home/dashboard',
		subs: [
			{ key: '/home/general/button', title: '按钮', icon: '', },
			{ key: '/home/general/icon', title: '图标', icon: '', },
		]
	},
	{
		title: '文章管理',
		icon: <ReadOutlined />,
		key: '/home/article',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '',
				subs: [
					{
						key: '/home/entry/form',
						title: '表单',
						icon: '',
						subs: [
							{ key: '/home/entry/form/basic-form', title: '基础表单', icon: '' },
							{ key: '/home/entry/form/step-form', title: '分步表单', icon: '' }
						]
					},
					{ key: '/home/entry/upload', title: '上传', icon: '' },
				] },
			{ key: '/home/display/collapse', title: '折叠面板', icon: '' },
			{ key: '/home/display/list', title: '列表', icon: '' },
			{ key: '/home/display/table', title: '表格', icon: '' },
			{ key: '/home/display/tabs', title: '标签页', icon: '', },
		]
	},
	{
		title: '博客标签',
		icon: <TagsOutlined />,
		key: '/home/blogTag',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '' },
			{ key: '/home/display/collapse', title: '折叠面板', icon: '' },
			{ key: '/home/display/list', title: '列表', icon: '' },
			{ key: '/home/display/table', title: '表格', icon: '' },
			{ key: '/home/display/tabs', title: '标签页', icon: '', },
		]
	},
	{
		title: '博客分类',
		icon: <FolderOpenOutlined />,
		key: '/home/blogType',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '' },
			{ key: '/home/display/collapse', title: '折叠面板', icon: '' },
			{ key: '/home/display/list', title: '列表', icon: '' },
			{ key: '/home/display/table', title: '表格', icon: '' },
			{ key: '/home/display/tabs', title: '标签页', icon: '', },
		]
	},
	{
		title: '日记本',
		icon: <BookOutlined />,
		key: '/home/diary',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '' },
			{ key: '/home/display/collapse', title: '折叠面板', icon: '' },
			{ key: '/home/display/list', title: '列表', icon: '' },
			{ key: '/home/display/table', title: '表格', icon: '' },
			{ key: '/home/display/tabs', title: '标签页', icon: '', },
		]
	},
	{
		title: '七牛云',
		icon: <CloudOutlined />,
		key: '/home/qiniuCloud',
		subs: [
			{ key: '/home/feedback/modal', title: '对话框', icon: '', },
			{ key: '/home/feedback/notification', title: '通知提醒框', icon: '' },
			{ key: '/home/feedback/spin', title: '加载中', icon: '', }
		]
	},
	{
		title: '常用书签导航',
		icon: <DatabaseOutlined />,
		key: '/home/booksNav',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '' },
			{ key: '/home/display/collapse', title: '折叠面板', icon: '' },
			{ key: '/home/display/list', title: '列表', icon: '' },
			{ key: '/home/display/table', title: '表格', icon: '' },
			{ key: '/home/display/tabs', title: '标签页', icon: '', },
		]
	},
	{
		title: '个人设置',
		icon: <SettingOutlined />,
		key: '/home/setting',
		subs: [
			{ key: '/home/feedback/modal', title: '对话框', icon: '', },
			{ key: '/home/feedback/notification', title: '通知提醒框', icon: '' },
			{ key: '/home/feedback/spin', title: '加载中', icon: '', }
		]
	},
	{
		title: 'Github信息统计',
		icon: <GithubOutlined />,
		key: '/home/github',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '' },
		]
	},
	{
		title: '留言板',
		icon: <ContactsOutlined />,
		key: '/home/guest',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '' },
		]
	},
	{
		title: '工作记录',
		icon: <ProjectOutlined />,
		key: '/home/work',
		subs: [
			{ key: '/home/display/carousel', title: '轮播图', icon: '' },
		]
	},
	{
		title: '其它',
		icon: 'bulb',
		key: '/home/other',
		subs:[
			{ key: '/home/other/animation', title: '动画', icon: '', },
			{ key: '/home/other/gallery', title: '画廊', icon: '', },
			{ key:'/home/other/draft',title:'富文本',icon:'' },
			{ key:'/home/other/chart',title:'图表',icon:'' },
			{ key:'/home/other/loading',title:'加载动画',icon:'' },
			{ key:'/home/other/404',title:'404',icon:'' },
			{ key:'/home/other/springText',title:'弹性文字',icon:'' },
		]
	},
	{
		title: '关于',
		icon: 'info-circle-o',
		key: '/home/about'
	}
];
