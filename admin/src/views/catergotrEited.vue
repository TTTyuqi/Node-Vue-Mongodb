<template>
  <div class="about">
    <h1>{{id ? '编辑' :'新建'}}分类</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="上级分类" label-width="120px">
        <el-select v-model="model.parent" placeholder="请选择上级分类名称">
          <el-option v-for="items in parentOption" :key="items._id" :value="items._id" :label="items.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称" label-width="120px">
        <el-input v-model="model.name" placeholder="请输入名称"></el-input>
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
      parentOption:[]
    }

  },
  methods: {
    async save(){
      if(this.id){
        const moude = await this.$http.put(`/rest/Caterory/${this.id}`,this.model)
      }else{
        const res = await this.$http.post('/rest/Caterory',this.model)
      }
      this.$router.push('/categoriter/list')
        this.$message({
            type: 'success',
            message:'保存成功'
        })
    },
     async fech(){
      const res = await this.$http.get(`/rest/Caterory/${this.id}`)
      this.model = res.data
      console.log('model',res)
    },
    async fechparent(){
      const res = await this.$http.get('/rest/Caterory')
      this.parentOption = res.data
    }
  },
  created () {
    this.fechparent()
    this.id && this.fech()
  }
}
</script>
