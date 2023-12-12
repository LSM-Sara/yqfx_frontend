<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="股票代码" width="180" />
    <el-table-column prop="name" label="证券名称" width="180" />
    <el-table-column prop="address" label="ESG得分" />
    <el-table-column prop="class" label="银行类别" />
    <el-table-column prop="env" label="环境" />
    <el-table-column prop="social" label="社会" />
    <el-table-column prop="gaverment" label="治理" />
  </el-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Chart',
  setup() {
    const tableData = [
      {
        date: '600036.SH',
        name: '招商银行',
        address: 7.24,
        class: '股份制商业银行',
        env: 5.1,
        social: 4.84,
        gaverment: 7.89
      },
      {
        date: '601077.SH',
        name: '渝农商行',
        address: 6.86,
        class: '农村商业银行',
        env: 9.43,
        social: 6.89,
        gaverment: 7.9
      },
      {
        date: '601288.SH',
        name: '农业银行',
        address: 6.76,
        class: '国有控股大型商业银行',
        env: 10.0,
        social: 5.78,
        gaverment: 8.16
      },
      {
        date: '601166.SH',
        name: '兴业银行',
        address: 6.72,
        class: '股份制商业银行',
        env: 9.07,
        social: 6.09,
        gaverment: 7.94
      },
      {
        date: '000001.SZ',
        name: '平安银行',
        address: 6.68,
        class: '股份制商业银行',
        env: 3.96,
        social: 4.7,
        gaverment: 7.06
      },
      {
        date: '601939.SH',
        name: '建设银行',
        address: 6.66,
        class: '国有控股大型商业银行',
        env: 10.0,
        social: 5.34,
        gaverment: 7.77
      },
      {
        date: '002936.SZ',
        name: '郑州银行',
        address: 6.52,
        class: '城市商业银行',
        env: 6.23,
        social: 5.68,
        gaverment: 8.37
      },
      {
        date: '601988.SH',
        name: '中国银行',
        address: 6.48,
        class: '国有控股大型商业银行',
        env: 9.49,
        social: 8.8,
        gaverment: 7.3
      },
      {
        date: '601398.SH',
        name: '工商银行',
        address: 6.46,
        class: '国有控股大型商业银行',
        env: 10.0,
        social: 6.53,
        gaverment: 6.24
      },
      {
        date: '601328.SH',
        name: '交通银行',
        address: 6.4,
        class: '国有控股大型商业银行',
        env: 6.85,
        social: 9.11,
        gaverment: 8.46
      }
    ]
    return { tableData }
  }
})
</script>
