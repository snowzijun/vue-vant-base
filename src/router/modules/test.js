// 测试路由
export default [
  {
    path: '/test',
    name: 'Test',
    meta: {
      title: '首页'
    },
    component: () => import('@/views/member/index/index'),
    redirect: { name: 'TestAbout' },
    children: [
      {
        path: 'about',
        name: 'TestAbout',
        meta: {
          title: '关于'
        },
        component: () => import('@/views/member/about/index')
      }
    ]
  }
]
