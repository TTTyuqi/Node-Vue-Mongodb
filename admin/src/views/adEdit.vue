<template>
  <div class="about">
    <h1>{{id ? '编辑' :'新建'}}广告位</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="名称" label-width="120px">
        <el-input v-model="model.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="广告" label-width="120px">
        <el-button type="text" @click="model.itmes.push({})"><i class="el-icon-plus"></i>添加广告</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.itmes" :key="i">
              <el-form-item label="跳转链接URL" label-width="120px">
                <el-input v-model="item.url"></el-input>
              </el-form-item>
              <el-form-item label="图片" label-width="120px" style="margin-top:0.5rem">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :headers="getAuthorization()"
                  :show-file-list="false"
                  :on-success="res => $set(item,'image' ,res.url)"
                >
                  <img v-if="item.image" :src="item.image" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="" label-width="120px">
              <el-button type="danger" size="small" @click="model.itmes.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
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
    min-width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    min-width: 178px;
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
      model:{},
    }

  },
  methods: {
    async save(){
      if(this.id){
        const moude = await this.$http.put(`/rest/Ad/${this.id}`,this.model)
      }else{
        const res = await this.$http.post('/rest/Ad',this.model)
      }
      this.$router.push('/ads/list')
        this.$message({
            type: 'success',
            message:'保存成功'
        })
    },
     async fech(){
      const res = await this.$http.get(`/rest/Ad/${this.id}`)
      this.model = Object.assign({},this.model,res.data)
    },
  },
  created () {
    this.id && this.fech()
  }
}
</script>
