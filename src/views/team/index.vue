<template>
  <div class="team-wrapper">
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <div>
          <al-table
            :column="formData.column"
            :data="formData.list"
            :pagination="true"
          >
          </al-table>
        </div>
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTeamList } from "@/api/team.js";
import ListLayout from "@/components/ListLayout/index.vue";
import AlTable from "@/components/AlTable/index.vue";
import Conditions from "./components/conditions/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    ListLayout,
    AlTable,
    Conditions,
  },

  data() {
    return {
      formData: {
        column: [
          {
            prop: "nick",
            label: "昵称",
          },
          {
            prop: "phone",
            label: "手机号",
          },
          {
            prop: "name",
            label: "真实姓名",
          },
          {
            prop: "subject",
            label: "所属学科",
          },
          {
            prop: "job",
            label: "职位",
          },
          {
            prop: "year",
            label: "工作年限",
          },
          {
            prop: "updateTime",
            label: "录入时间",
          },
          {
            prop: "actions",
            label: "操作",
            render(_, scope) {
              return (
                <div>
                  <el-link type="primary">查看|</el-link>
                  <el-link type="primary">编辑|</el-link>
                  <el-link type="primary">删除</el-link>
                </div>
                // <div>
                //   <el-button size="mini" type="primary">查看</el-button>
                //   <el-button size="mini" type="success">编辑</el-button>
                //   <el-button size="mini" type="danger">删除</el-button>
                // </div>
              );
            },
          },
        ],
        list: [],
      },
    };
  },

  created() {
    getTeamList().then((res) => {
      const { code, data } = res;
      if (code === 20000) {
        const { items, total } = data;
        this.formData.list = items;
      }
      console.log("test", res);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>