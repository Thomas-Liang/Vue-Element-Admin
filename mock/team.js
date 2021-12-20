const list = [
    {
     nick:"Allen",
     phone:"13566789067",
     name:"John",
     subject:"english",
     job:"aaa",
     year:22,
     updateTime:'2021-11-30'
    },{
      nick:"Allen2",
      phone:"13566789067",
      name:"John",
      subject:"english",
      job:"aaa",
      year:22,
      updateTime:'2021-11-30'
    },{
      nick:"Allen3",
      phone:"13566789067",
      name:"John",
      subject:"english",
      job:"aaa",
      year:22,
      updateTime:'2021-11-30'
    },{
      nick:"Allen",
      phone:"13566789067",
      name:"John",
      subject:"english",
      job:"aaa",
      year:22,
      updateTime:'2021-11-30'
    }
]
module.exports = [
  {
    url: '/vue-element-admin/team/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
