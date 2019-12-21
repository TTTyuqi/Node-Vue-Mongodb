<template>
  <div class="about">
    <h1>{{id ? '编辑' :'新建'}}物品</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="物品名称" label-width="120px">
        <el-input v-model="model.name" placeholder="请输入名称"></el-input>
      </el-form-item>
       <el-form-item label="图标" label-width="120px">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :headers="getAuthorization()"
          :show-file-list="false"
          :on-success="handleSuccess"
       >
          <img v-if="model.icon" :src="model.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label-width="120px">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
export default {
  props: {
    id:{}
  },
  data () {
    return {
      model:{
        name:'',
        icon:''
      },
    }

  },
  methods: {
    handleSuccess(res){
      this.model.icon = res.url
    },
    async save(){
      if(this.id){
        const moude = await this.$http.put(`/rest/Items/${this.id}`,this.model)
      }else{
        const res = await this.$http.post('/rest/Items',this.model)
      }
      this.$router.push('/items/list')
        this.$message({
            type: 'success',
            message:'保存成功'
        })
    },
     async fech(){
      const res = await this.$http.get(`/rest/Items/${this.id}`)
      this.model = res.data
      console.log('model',res)
    },
  },
  created () {
    this.id && this.fech()
  }
}
</script>

