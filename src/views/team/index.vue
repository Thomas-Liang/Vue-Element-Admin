<template>
  <div class="team-wrapper">
    <list-layout>
      <template slot="header">
        <conditions @searchFilter="searchFilters" />
      </template>
      <template slot="content">
        <div class="table-button">
          <el-button
            class="table-but"
            size="mini"
            icon="el-icon-refresh-right"
          />
          <el-button
            class="table-but remove-border"
            size="mini"
            icon="el-icon-notebook-2"
          />
          <el-button class="table-but" size="mini" icon="el-icon-setting" />
        </div>
        <div class="table">
          <al-table
            :column="formData.column"
            :data="formData.list"
            :pagination="true"
          />
        </div>
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTeamList } from '@/api/team.js'
import ListLayout from '@/components/ListLayout/index.vue'
import AlTable from '@/components/AlTable/index.vue'
import Conditions from './components/conditions/index.vue'
export default {
  components: {
    ListLayout,
    AlTable,
    Conditions
  },
  data() {
    return {
      formData: {
        column: [
          {
            prop: 'nick',
            label: '昵称',
            sortable: true
          },
          {
            prop: 'phone',
            label: '手机号',
            sortable: true
          },
          {
            prop: 'name',
            label: '真实姓名',
            sortable: true
          },
          {
            prop: 'subject',
            label: '所属学科',
            sortable: true
          },
          {
            prop: 'job',
            label: '职位',
            sortable: true
          },
          {
            prop: 'year',
            label: '工作年限',
            sortable: true
          },
          {
            prop: 'updateTime',
            label: '录入时间',
            sortable: true
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (
                <div>
                  <el-link type='primary'>查看</el-link>
                  <el-link type='primary'>|</el-link>
                  <el-link type='primary'>编辑</el-link>
                  <el-link type='primary'>|</el-link>
                  <el-link type='primary'>删除</el-link>
                </div>
              )
            }
          }
        ],
        list: [],
        temp: []
      }
    }
  },
  created() {
    getTeamList().then((res) => {
      const { code, data } = res
      if (code === 20000) {
        const { items } = data
        this.formData.list = items
        this.formData.temp = items
      }
      // console.log('team', res)
    })
  },
  methods: {
    // 获取conditions子组件传来的搜索条件，然后进行列表数据过滤
    searchFilters(payload) {
      // console.log(payload)
      // 1.从payload中获取输入的查询条件
      const { nick, job, subject, startYear, endYear, phone } = payload
      // 2.将接口的初始数据赋值给list
      this.formData.list = this.formData.temp
      if (
        nick === '' &&
        job === '' &&
        subject === '' &&
        startYear === '' &&
        endYear === '' &&
        phone === ''
      ) {
        return
      }
      // 筛选条件
      const filter = {
        nick,
        job,
        subject,
        year: endYear - startYear,
        phone
      }
      // console.log(filter)
      // 拿到有值的参数
      const tempFilter = {}
      Object.keys(filter).forEach(function(key) {
        // console.log(key, filter[key])
        if (
          typeof filter[key] !== undefined &&
          filter[key] !== null &&
          filter[key] !== '' &&
          filter[key] !== 0
        ) {
          tempFilter[key] = filter[key]
        }
      })
      // console.log(tempFilter)

      // 3.对列表数据进行数据过滤
      const resultArr = this.formData.list.filter((item) => {
        let flag = false
        Object.keys(tempFilter).forEach(function(key) {
          if (item[key].toString().indexOf(tempFilter[key].toString()) >= 0) {
            flag = true
          } else {
            flag = false
          }
        })
        if (flag) {
          return item
        }
      })
      this.formData.list = resultArr
    }
  }
}
</script>

<style lang="scss" scoped>
.table-button {
  float: right;
  margin-bottom: 10px;
  font-size: 20px;
}
.table-but {
  margin: 0px;
  padding: 0px;
  width: 30px;
  height: 30px;
  border-radius: 0px;
  border: 1px solid #d9d9d9;
}
.remove-border {
  border-left: 0px;
  border-right: 0px;
}
</style>
