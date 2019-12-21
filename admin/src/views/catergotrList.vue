<template>
 <div class="about">
    <h1>分类列表</h1>
      <el-table :data="tableData" >
        <el-table-column prop="_id" label="ID" width="230">
        </el-table-column>
        <el-table-column prop="parent.name" label="上级名称">
        </el-table-column>
        <el-table-column prop="name" label="分类名称">
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
      const res = await this.$http.get('/rest/Caterory')
        this.tableData = res.data
        console.log('res.data',res.data)
    },
    handleClick(record){
      console.log(record._id)
      this.$router.push(`/categoriter/create/${record._id}`)
    },
    async remove(record){
        this.$confirm(`是否确定要删除该分类"${record.name}"`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
         const res = await this.$http.delete(`/rest/Caterory/${record._id}`)
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
