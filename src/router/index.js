import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage'); //首页
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const ticketList = r => require.ensure([], () => r(require('@/page/ticketList')), 'ticketList');
const supplierList = r => require.ensure([], () => r(require('@/page/supplierList')), 'supplierList');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');


const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},
		{
			path: '/ticketList',
			component: ticketList,
			meta: ['发票管理', ],

		},
		{
			path: '/supplierList',
			component: supplierList,
			meta: ['供应商管理', ],

		},
		{
			path: '/userList',
			component: userList,
			meta: ['组织机构',],
		},
	]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
