<template>
  <div class="team-wrapper">
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
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
            label: '手机号'
          },
          {
            prop: 'name',
            label: '真实姓名'
          },
          {
            prop: 'subject',
            label: '所属学科'
          },
          {
            prop: 'job',
            label: '职位'
          },
          {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '录入时间'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (
                <div>
                  <el-link type='primary'>查看|</el-link>
                  <el-link type='primary'>编辑|</el-link>
                  <el-link type='primary'>删除</el-link>
                </div>
              )
            }
          }
        ],
        list: []
      }
    }
  },
  created() {
    getTeamList().then((res) => {
      const { code, data } = res
      if (code === 20000) {
        const { items } = data
        this.formData.list = items
      }
      console.log('team', res)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
