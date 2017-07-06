module.exports = {
  menus: [
    {
      key: 0,
      name: 'Home',
      icon: 'home',
      url: '/home'
    },
    {
      key: 1,
      name: 'Pages',
      icon: 'user',
      child: [
        {
          name: 'Form',
          key: 102,
          url: '/form'
        },
        {
          name: 'Table',
          key: 103,
          url: '/table'
        },
      ]
    },
    {
      key: 2,
      name: 'Components',
      icon: 'api',
      child: [
        {
          name: 'NavigationPage',
          key: 201,
          url: '/components/navigation'
        },
        {
          name: 'DataDisplayPage',
          key: 202,
          url: '/components/dataDisplay'
        },
        {
          name: 'GeneralPage',
          key: 203,
          url: '/components/general'
        },
        {
          name: 'FeedbackPage',
          key: 204,
          url: '/components/feedback'
        },

      ]
    },
    {
      key: 4,
      name: '其它',
      icon: 'coffee',
      child: [
        {
          name: '选项1',
          key: 401
        },
        {
          name: '选项2',
          key: 402
        },
        {
          name: '选项3',
          key: 403
        },
        {
          name: '错误页面',
          key: 404
        },
      ]
    }
  ]
};
