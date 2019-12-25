<template>
  <div class="about">
    <h1>{{id ? '编辑' :'新建'}}英雄</h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-tabs value="skill" type="border-card">
        <el-tab-pane label="基础信息" name="baseinfo">
            <el-form-item label="英雄名称" label-width="120px">
              <el-input v-model="model.name" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label="图标" label-width="120px">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthorization()"
                :show-file-list="false"
                :on-success="res => $set(model,'avatar' ,res.url)"
              >
                <img v-if="model.avatar" :src="model.avatar" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="banner" label-width="120px">
              <el-upload
                class="avatar-uploader"
                :action="uploadUrl"
                :headers="getAuthorization()"
                :show-file-list="false"
                :on-success="res => $set(model,'banner' ,res.url)"
              >
                <img v-if="model.banner" :src="model.banner" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="英雄称号" label-width="120px">
              <el-input v-model="model.title" placeholder="请输入称号"></el-input>
            </el-form-item>
            <el-form-item label="英雄分类" label-width="120px">
              <el-select v-model="model.caterorus" placeholder="请选择分类" multiple >
                <el-option v-for="(items,i) in caterusData" :key="i" :value="items._id" :label="items.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="难度" label-width="120px">
              <el-rate style="margin-top:0.6rem" show-score :max="9" v-model="model.scores.diffcult"></el-rate>
            </el-form-item>
            <el-form-item label="技能" label-width="120px">
              <el-rate style="margin-top:0.6rem" show-score :max="9" v-model="model.scores.skill"></el-rate>
            </el-form-item>
            <el-form-item label="攻击" label-width="120px">
              <el-rate style="margin-top:0.6rem" show-score :max="9" v-model="model.scores.attack"></el-rate>
            </el-form-item>
            <el-form-item label="生存" label-width="120px">
              <el-rate style="margin-top:0.6rem" show-score :max="9" v-model="model.scores.survive"></el-rate>
            </el-form-item>
            <el-form-item label="顺风出装" label-width="120px">
              <el-select v-model="model.itmes1" placeholder="请选择装备" multiple >
                <el-option v-for="(items,i) in itmesData" :key="i" :value="items._id" :label="items.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="逆风出装" label-width="120px">
              <el-select v-model="model.itmes2" placeholder="请选择装备" multiple >
                <el-option v-for="(items,i) in itmesData" :key="i" :value="items._id" :label="items.name"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="使用技巧" label-width="120px">
              <el-input type="textarea" v-model="model.usageTips" ></el-input>
            </el-form-item>
            <el-form-item label="对抗技巧" label-width="120px">
              <el-input type="textarea" v-model="model.attackTips" ></el-input>
            </el-form-item>
            <el-form-item label="团战思路" label-width="120px">
              <el-input type="textarea" v-model="model.teamTips" ></el-input>
            </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skill">
          <el-button type="text" @click="model.skills.push({})"><i class="el-icon-plus"></i>添加技能</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="技能名称">
                <el-input v-model="item.skiName" placeholder="请输入技能名称"></el-input>
              </el-form-item>
              <el-form-item label="技能图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :headers="getAuthorization()"
                  :show-file-list="false"
                  :on-success="res => $set(item,'skiIcon' ,res.url)"
                >
                  <img v-if="item.skiIcon" :src="item.skiIcon" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input  v-model="item.delay" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input  v-model="item.cost" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="技能描述">
                <el-input type="textarea" v-model="item.discription" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="使用技巧">
                <el-input type="textarea" v-model="item.tipes" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="">
              <el-button type="danger" size="small" @click="model.skills.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
         <el-tab-pane label="最佳搭档" name="partners">
          <el-button type="text" @click="model.partners.push({})"><i class="el-icon-plus"></i>添加英雄</el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.partners" :key="i">
              <el-form-item label="英雄">
                <el-select v-model="item.hero" placeholder="" filterable >
                  <el-option v-for="hero in heros" :key="hero._id" :value="hero._id" :label="hero.name"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="英雄描述">
                <el-input type="textarea" v-model="item.description" placeholder=""></el-input>
              </el-form-item>
              <el-form-item label="">
              <el-button type="danger" size="small" @click="model.partners.splice(i,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-form-item label-width="120px" style="margin-top:1rem;">
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
        avatar:'',

        scores:{
          diffcult:0,
          skill:0,
          attack:0,
          survive:0

        },
      },
      caterusData:[],
      itmesData:[],
      heros:[],
    }

  },
  methods: {
    handleSuccess(res){
      this.model.avatar = res.url
    },
    async save(){
      if(this.id){
        const moude = await this.$http.put(`/rest/Heros/${this.id}`,this.model)
      }else{
        const res = await this.$http.post('/rest/Heros',this.model)
      }
      this.$router.push('/heros/list')
        this.$message({
            type: 'success',
            message:'保存成功'
        })
    },
     async fech(){
      const res = await this.$http.get(`/rest/Heros/${this.id}`)
      this.model = Object.assign({},this.model,res.data)
    },
    async fechCaterory(){
      const res = await this.$http.get('/rest/Caterory')
      this.caterusData = res.data
    },
    async fechItems(){
      const res = await this.$http.get('/rest/Items')
      this.itmesData = res.data
    },
   async fechHeros(){
      const res = await this.$http.get('/rest/Heros')
      this.heros = res.data
    },
  },
  created () {
    this.fechItems()
    this.fechHeros()
    this.fechCaterory()
    this.id && this.fech()
  }
}
</script>

