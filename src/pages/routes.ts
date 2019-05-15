/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-04-08 11:33:38
 * @LastEditTime: 2019-05-15 14:31:58
 */
import _import from '@/utils/_import';
const basePath = '';
const fatherPath = '';
const routes = [
  {
    path: '/',
    name: '首页',
    title: '首页',
    description: '这里是是首页落地页',
    component: _import( basePath + '/Home' ),
    from: fatherPath,
  },
  {
    path: '/demo',
    name: 'Demo',
    description: '这里是演示页面',
    title: '演示',
    component: _import( basePath + '/Demo' ),
    from: fatherPath,
    children: {
      routes: _import( basePath + '/Demo/routes' ),
    },
  },
  {
    path: '/404',
    name: '404',
    description: '404',
    title: 'Not Found',
    component: _import( basePath + '/NotFound' ),
    from: fatherPath,
  },
];

export default routes;
