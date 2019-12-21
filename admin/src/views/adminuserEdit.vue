<template>
  <div class="about">
    <h1>{{id ? '编辑' :'新建'}}管理员</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="用户名" label-width="120px">
        <el-input v-model="model.userName" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="120px">
        <el-input v-model="model.passWord" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label-width="120px">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    id:{}
  },
  data () {
    return {
      model:{},
    }

  },
  methods: {
    async save(){
      if(this.id){
        const moude = await this.$http.put(`/rest/AdminUser/${this.id}`,this.model)
      }else{
        const res = await this.$http.post('/rest/AdminUser',this.model)
      }
      this.$router.push('/admin_user/list')
        this.$message({
            type: 'success',
            message:'保存成功'
        })
    },
     async fech(){
      const res = await this.$http.get(`/rest/AdminUser/${this.id}`)
      this.model = res.data
      console.log('model',res)
    },
  },
  created () {
    this.id && this.fech()
  }
}
</script>
