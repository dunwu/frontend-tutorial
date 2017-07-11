module.exports = {
  menus: [
    {
      key: 0,
      name: 'Dashboard',
      icon: 'area-chart',
      url: '/pages/dashboard'
    },
    {
      key: 1,
      name: 'Pages',
      icon: 'user',
      child: [
        {
          name: 'Chart',
          key: 11,
          url: '/pages/chart'
        },
        {
          name: 'Form',
          key: 12,
          url: '/pages/form'
        },
        {
          name: 'Table',
          key: 13,
          url: '/pages/table'
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
          key: 21,
          url: '/components/navigation'
        },
        {
          name: 'DataDisplayPage',
          key: 22,
          url: '/components/dataDisplay'
        },
        {
          name: 'GeneralPage',
          key: 23,
          url: '/components/general'
        },
        {
          name: 'FeedbackPage',
          key: 24,
          url: '/components/feedback'
        },
      ]
    },
    {
      key: 4,
      name: 'Others',
      icon: 'coffee',
      child: [
        {
          name: '选项1',
          key: 41
        },
        {
          name: '选项2',
          key: 42
        },
        {
          name: '选项3',
          key: 43
        },
        {
          name: '错误页面',
          key: 44
        },
      ]
    }
  ]
};
