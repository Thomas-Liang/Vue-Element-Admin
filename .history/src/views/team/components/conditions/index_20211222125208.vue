<template>
  <div class="conditions-wrapper">
    <el-form inline>
      <el-form-item>
        <el-input placeholder="昵称">
          <template slot="prepend">昵称</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <div class="el-input-group__prepend subject">所属学科</div>
        <el-select id="subject" placeholder="请选择">
          <el-option label="web前端" value="web" />
          <el-option label="java" value="java" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="职位">
          <template slot="prepend">职位</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="起" maxlength="10">
          <template slot="prepend">工作年限</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="止" />
      </el-form-item>
      <el-form-item>
        <el-input placeholder="手机号">
          <template slot="prepend">手机号</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-search"
        >搜索</el-button>
        <el-button
          type="info"
          size="mini"
          icon="el-icon-top-left"
        >重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
<style>
.el-input__inner {
  width: 100px;
}
.subject{
  display:inline-block;
  width:80px;
  height:36px;
  padding:0 10px;
  margin-top:-3px;
}
#subject{
border-top-left-radius: 0px;
border-bottom-left-radius:0px;
}
</style>
