<template>
 <div class="about">
    <h1>管理员列表</h1>
      <el-table :data="tableData" >
        <el-table-column prop="_id" label="ID" width="230">
        </el-table-column>
        <el-table-column prop="userName" label="用户名">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
 </div>
</template>
<script>
export default {
  data () {
    return {
      tableData:[],
    }
  },
  created () {
    this.categrlist()
  },
  methods: {
    async categrlist(){
      const res = await this.$http.get('/rest/AdminUser')
        this.tableData = res.data
        console.log('res.data',res.data)
    },
    handleClick(record){
      console.log(record._id)
      this.$router.push(`/admin_user/create/${record._id}`)
    },
    async remove(record){
        this.$confirm(`是否确定要删除该管理员"${record.userName}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
         const res = await this.$http.delete(`/rest/AdminUser/${record._id}`)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
           this.categrlist()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
     
    }
  },


}
</script>
