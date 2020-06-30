/**
 * home.js
 * @author wangbo
 * @since 2020/3/28
 * @github https://github.com/BoWang816
 */

// 菜单列表
import React from 'react';
import {
    AiOutlineHome,
    AiOutlineEye,
    AiOutlineIdcard,
    AiOutlineDashboard,
    AiOutlineSetting,
    AiOutlineProject,
    AiOutlineCloud,
    AiOutlineBook,
    AiOutlineTags,
    AiOutlineFolderOpen,
    AiOutlineDatabase,
    AiOutlineContacts,
    AiOutlineRead
} from 'react-icons/ai';
import {
    Home,
    TrafficStatistics,
    ReadStatistics,
    ArticleList,
    operateArticle,
    ArticleTypes,
    ArticleTags,
    DiaryList,
    AddDiary,
    EditDiary,
    Password,
    Info,
    BooksNav,
    Cloud,
    AddWork,
    EditWork,
    WorkList,
    Resume,
    Guest
} from '../../public/businessComponents';

export const MENUS = [
    {
        title: '首页',
        icon: <AiOutlineHome />,
        key: '/home',
        component: Home
    },
    {
        title: '监控面板',
        icon: <AiOutlineDashboard />,
        key: '/home/dashboard',
        subs: [
            {
                key: '/home/dashboard/view',
                title: '访问量监控',
                icon: <AiOutlineEye />,
                component: TrafficStatistics
            },
            {
                key: '/home/dashboard/read',
                title: '阅读量监控',
                icon: <AiOutlineRead />,
                component: ReadStatistics
            }
        ]
    },
    {
        title: '文章管理',
        icon: <AiOutlineRead />,
        key: '/home/article',
        subs: [
            {
                key: '/home/article/list',
                title: '文章列表',
                icon: '',
                component: ArticleList
            },
            {
                key: '/home/article/add',
                title: '新增文章',
                icon: '',
                component: operateArticle
            },
            {
                key: '/home/article/edit',
                title: '编辑文章',
                icon: '',
                component: operateArticle
            }
        ]
    },
    {
        title: '博客标签',
        icon: <AiOutlineTags />,
        key: '/home/blogTag',
        component: ArticleTags
    },
    {
        title: '博客分类',
        icon: <AiOutlineFolderOpen />,
        key: '/home/blogType',
        component: ArticleTypes
    },
    {
        title: '日记本',
        icon: <AiOutlineBook />,
        key: '/home/diary',
        subs: [
            {
                key: '/home/diary/list',
                title: '日记墙',
                icon: '',
                component: DiaryList
            },
            {
                key: '/home/diary/add',
                title: '新增日记',
                icon: '',
                component: AddDiary
            },
            {
                key: '/home/diary/edit',
                title: '编辑日记',
                icon: '',
                component: EditDiary
            }
        ]
    },
    {
        title: '七牛云',
        icon: <AiOutlineCloud />,
        key: '/home/qiniuCloud',
        component: Cloud
    },
    {
        title: '书签导航',
        icon: <AiOutlineDatabase />,
        key: '/home/booksNav',
        component: BooksNav
    },
    {
        title: '个人设置',
        icon: <AiOutlineSetting />,
        key: '/home/setting',
        subs: [
            {
                key: '/home/setting/info',
                title: '个人资料',
                icon: '',
                component: Info
            },
            {
                key: '/home/setting/password',
                title: '密码管理',
                icon: '',
                component: Password
            }
        ]
    },
    {
        title: '简历管理',
        icon: <AiOutlineIdcard />,
        key: '/home/resume',
        component: Resume
    },
    {
        title: '留言板',
        icon: <AiOutlineContacts />,
        key: '/home/guest',
        component: Guest
    },
    {
        title: '工作记录',
        icon: <AiOutlineProject />,
        key: '/home/work',
        subs: [
            {
                key: '/home/work/list',
                title: '记录列表',
                icon: '',
                component: WorkList
            },
            {
                key: '/home/work/add',
                title: '新增记录',
                icon: '',
                component: AddWork
            },
            {
                key: '/home/work/edit',
                title: '编辑记录',
                icon: '',
                component: EditWork
            }
        ]
    },
    {
        title: '其它',
        icon: <AiOutlineProject />,
        key: '/home/other',
        subs: [
            {
                key: '/home/other/animation',
                title: '动画',
                icon: ''
            }
        ]
    }
];
// 标签颜色列表
export const TAG_COLOR = ['magenta', 'red', 'volcano', 'orange', 'gold', 'green', 'cyan', 'blue', 'geekblue', 'purple'];

export const Black = ' ';
