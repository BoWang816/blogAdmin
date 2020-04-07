/**
 * 业务组件统一管理
 * businessComponents.js
 * @author
 * @since 2020/3/29
 * @github https://github.com/BoWang816
 */

import LoadProgress from '@utils/loadProgress';

const Home = LoadProgress(() => import('./home'));
const ReadStatistics = LoadProgress(() => import('./dashboard/ReadStatistics'));
const TrafficStatistics = LoadProgress(() => import('./dashboard/TrafficStatistics'));

const ArticleList = LoadProgress(() => import('./article/ArticleList'));
const AddArticle = LoadProgress(() => import('./article/AddArticle'));
const EditArticle = LoadProgress(() => import('./article/EditArticle'));
const ArticleTags = LoadProgress(() => import('./article/ArticleTags'));
const ArticleTypes = LoadProgress(() => import('./article/ArticleTypes'));

const DiaryList = LoadProgress(() => import('./diary/DiaryList'));
const AddDiary = LoadProgress(() => import('./diary/AddDiary'));
const EditDiary = LoadProgress(() => import('./diary/EditDiary'));

const Cloud = LoadProgress(() => import('./qiniuCloud/Cloud'));
const BooksNav = LoadProgress(() => import('./booksNav/BooksNav'));

const Password = LoadProgress(() => import('./setting/Password'));
const Info = LoadProgress(() => import('./setting/Info'));

const Github = LoadProgress(() => import('./github/Github'));

const Resume = LoadProgress(() => import('./resume/Resume'));

const Guest = LoadProgress(() => import('./guest/Guest'));

const WorkList = LoadProgress(() => import('./work/WorkList'));
const AddWork = LoadProgress(() => import('./work/AddWork'));
const EditWork = LoadProgress(() => import('./work/EditWork'));

export {
	Home,
	TrafficStatistics,
	ReadStatistics,
	AddArticle,
	ArticleList,
	EditArticle,
	ArticleTags,
	ArticleTypes,
	DiaryList,
	AddDiary,
	EditDiary,
	Cloud,
	BooksNav,
	Password,
	Info,
	Github,
	Guest,
	Resume,
	WorkList,
	AddWork,
	EditWork,
};
