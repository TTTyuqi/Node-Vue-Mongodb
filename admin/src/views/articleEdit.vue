<template>
  <div class="about">
    <h1>{{id ? '编辑' :'新建'}}文章</h1>
    <el-form @submit.native.prevent="save">
      <el-form-item label="所属分类" label-width="120px">
        <el-select v-model="model.categorys" placeholder="请选择文章类型" multiple >
          <el-option v-for="items in articOption" :key="items._id" :value="items._id" :label="items.name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" label-width="120px">
        <el-input v-model="model.title" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="详情" label-width="120px">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item label-width="120px">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//npm上下载并安装 使用vue2-editor富文本编辑器 npm install vue2-editor
// Basic Use - Covers most scenarios,引入富文本编辑器
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id:{}
  },
  components: {
    VueEditor
  },
  data () {
    return {
      model:{},
      articOption:[]
    }

  },
  methods: {
    async save(){
      if(this.id){
        const moude = await this.$http.put(`/rest/Article/${this.id}`,this.model)
      }else{
        const res = await this.$http.post('/rest/Article',this.model)
      }
      this.$router.push('/articles/list')
        this.$message({
            type: 'success',
            message:'保存成功'
        })
    },
     async fech(){
      const res = await this.$http.get(`/rest/Article/${this.id}`)
      this.model = res.data
      console.log('model',res)
    },
    async fechparent(){
      const res = await this.$http.get('/rest/Caterory')
      this.articOption = res.data
    },
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)
 
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post('/upload',formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
 
      // axios({
      //   url: "https://fakeapi.yoursite.com/images",
      //   method: "POST",
      //   data: formData
      // })
      //   .then(result => {
      //     let url = result.data.url; // Get url from response
      //     Editor.insertEmbed(cursorLocation, "image", url);
      //     resetUploader();
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  },
  created () {
    this.fechparent()
    this.id && this.fech()
  }
}
</script>
