<template>
  <div class="conditions-wrapper">
    <el-form inline>
      <el-form-item>
        <el-input v-model="listFilter.nick" placeholder="昵称">
          <template slot="prepend">昵称</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="el-input-group__prepend subject">所属学科</div>
        <el-select
          id="subject"
          v-model="listFilter.subject"
          placeholder="请选择"
        >
          <el-option label="" value="" />
          <el-option label="web" value="web" />
          <el-option label="java" value="java" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="listFilter.job" placeholder="职位">
          <template slot="prepend">职位</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="listFilter.startYear"
          placeholder="起"
          maxlength="10"
        >
          <template slot="prepend">工作年限</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="listFilter.endYear" placeholder="止" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="listFilter.phone" placeholder="手机号">
          <template slot="prepend">手机号</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-search"
          @click="onSearch"
        >搜索</el-button>
        <el-button
          type="info"
          size="mini"
          icon="el-icon-top-left"
          @click="onReset"
        >重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listFilter: {
        nick: '',
        job: '',
        subject: '',
        startYear: '',
        endYear: '',
        phone: ''
      }
    }
  },
  methods: {
    onSearch() {
      // 向父组件发送查询事件以及查询条件
      this.$emit('searchFilter', this.listFilter)
    },
    onReset() {
      this.listFilter = {
        nick: '',
        job: '',
        subject: '',
        startYear: '',
        endYear: '',
        phone: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
<style>
.el-input__inner {
  width: 120px;
}
.subject {
  display: inline-block;
  width: 80px;
  height: 36px;
  padding: 0 10px;
  margin-top: -3px;
}
#subject {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
