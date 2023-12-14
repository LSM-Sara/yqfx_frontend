<template>
  <div class="title">实体数据查看</div>
  <el-table 
  :data="shownData" 
  :default-sort="{ prop: 'value', order: 'descending' }" 
  tyle="width: 100%"
  height="100%"
  >
    <el-table-column prop="num" label="序号" />
    <el-table-column prop="name" label="实体"  />
    <el-table-column prop="value" sortable label="出现频率" />
    <el-table-column prop="positive" sortable label="正面频率" />
    <el-table-column prop="negative" sortable label="负面频率" />
    <el-table-column prop="neutral" sortable label="中立频率" />
    <el-table-column prop="sentiment"  
    :filters="[
        { text: 'positive', value: 'positive' },
        { text: 'negative', value: 'negative' },
        { text: 'neutral', value: 'neutral' }
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      label="最高频情感" />
  </el-table>
  <div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10,20,50,100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4871"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent,ref,onMounted } from 'vue'
import { wordCloudData } from '@/data/cloud'
interface User {
  num: number
  name:string
  value: number
  sentiment: string
}

export default defineComponent({
  name: 'Chart',
  setup() {
    const currentPage = ref(1)
    const pageSize = ref(10)
    const tableData = wordCloudData
    const shownData=ref([])
    const filterTag = (value: string, row: User) => {
      return row.sentiment === value
    }
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
      pageSize.value=val
      shownData.value=[]
      const startIndex = (currentPage.value - 1) * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      for (let i = startIndex; i < endIndex && i < tableData.length; i++) {
        let line=tableData[i];
        line.num=i+1;
        shownData.value.push(line);
      }
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
      currentPage.value=val;
      shownData.value=[]
      const startIndex = (currentPage.value - 1) * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      for (let i = startIndex; i < endIndex && i < tableData.length; i++) {
        let line=tableData[i];
        line.num=i+1;
        shownData.value.push(line);
      }
    }
    onMounted(()=>{
      shownData.value=[]
      for (let i = 0; i < pageSize.value && i < tableData.length; i++) {
        let line=tableData[i];
        line.num=i+1;
        shownData.value.push(line);
      }
    })
    return { 
      shownData,
      currentPage,
      pageSize,
      filterTag,
      handleSizeChange,
      handleCurrentChange
     }
  }
})
</script>
<style lang='scss'>
.title{
   height: 10vh;
   width: 90vw;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   font-size: 24px;
   font-weight: bold;
   color:darkTextColor;
}
</style>