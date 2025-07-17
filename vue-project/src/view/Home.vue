<template>
  <div class="container my-5">
    <h1 class="text-center mb-4 text-primary">📊 Dashboard Overview</h1>

    <div class="row g-4">
      <div v-for="(chart, index) in chartList" :key="index" class="col-md-6">
        <VChart :option="chart.option" autoresize style="height: 300px;" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VChart from 'vue-echarts'

// Example chart options (you'll replace/add real ones below)
const chartList = ref([
  {
    type: 'bar',
    option: {
      title: { text: 'Book Records' },
      xAxis: { data: ['Book A', 'Book B', 'Book C'] },
      yAxis: {},
      series: [{ type: 'bar', data: [45, 28, 15] }]
    }
  },
  {
    type: 'funnel',
    option: {
      title: { text: 'Multiple Funnels' },
      series: [
        {
          name: 'First Funnel',
          type: 'funnel',
          left: '10%',
          width: '40%',
          data: [
            { value: 100, name: 'Visit' },
            { value: 80, name: 'Signup' }
          ]
        },
        {
          name: 'Second Funnel',
          type: 'funnel',
          left: '55%',
          width: '40%',
          sort: 'ascending',
          data: [
            { value: 60, name: 'Trial' },
            { value: 40, name: 'Buy' }
          ]
        }
      ]
    }
  },
   {
    type: 'tree',
    option: {
      title: { text: 'Organ Data' },
      series: [
        {
          type: 'tree',
          data: [
            {
              name: 'Organ',
              children: [
                { name: 'Heart' },
                { name: 'Lungs' },
                { name: 'Liver' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    type: 'nestedPie',
    option: {
      title: { text: 'Nested Pie Chart', left: 'center' },
      series: [
        {
          type: 'pie',
          radius: ['0%', '40%'],
          label: { position: 'inner' },
          data: [
            { value: 335, name: 'Direct' },
            { value: 679, name: 'Email' }
          ]
        },
        {
          type: 'pie',
          radius: ['50%', '70%'],
          label: { position: 'outside' },
          data: [
            { value: 1548, name: 'Search Engine' },
            { value: 310, name: 'Ads' }
          ]
        }
      ]
    }
  },
  {
    type: 'bar',
    option: {
      title: { text: 'Monthly Sales' },
      xAxis: { data: ['Jan', 'Feb', 'Mar', 'Apr'] },
      yAxis: {},
      series: [{ type: 'bar', data: [120, 200, 150, 80] }]
    }
  },
  {
    type: 'line',
    option: {
      title: { text: 'User Growth' },
      xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
      yAxis: { type: 'value' },
      series: [{ data: [820, 932, 901, 934], type: 'line', smooth: true }]
    }
  },
  {
    type: 'pie',
    option: {
      title: { text: 'Traffic Sources', left: 'center' },
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'pie',
          radius: '60%',
          data: [
            { value: 1048, name: 'Search' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Referral' }
          ]
        }
      ]
    }
  },
  {
    type: 'radar',
    option: {
      title: { text: 'Skill Comparison' },
      radar: {
        indicator: [
          { name: 'HTML', max: 100 },
          { name: 'CSS', max: 100 },
          { name: 'JS', max: 100 },
          { name: 'Vue', max: 100 },
          { name: 'Testing', max: 100 }
        ]
      },
      series: [
        {
          type: 'radar',
          data: [
            { value: [90, 80, 85, 95, 70], name: 'Developer A' }
          ]
        }
      ]
    }
  },
  {
    type: 'gauge',
    option: {
      title: { text: 'Server Uptime' },
      series: [
        {
          type: 'gauge',
          progress: { show: true },
          detail: { valueAnimation: true, formatter: '{value}%' },
          data: [{ value: 89, name: 'Uptime' }]
        }
      ]
    }
  },
  {
    type: 'funnel',
    option: {
      title: { text: 'Sales Funnel' },
      series: [
        {
          type: 'funnel',
          data: [
            { value: 100, name: 'Visit' },
            { value: 80, name: 'Sign Up' },
            { value: 60, name: 'Purchase' },
            { value: 40, name: 'Repeat' }
          ]
        }
      ]
    }
  },
  {
    type: 'area',
    option: {
      title: { text: 'Revenue Growth' },
      xAxis: { type: 'category', data: ['2019', '2020', '2021', '2022'] },
      yAxis: { type: 'value' },
      series: [{
        data: [300, 500, 800, 1200],
        type: 'line',
        areaStyle: {}
      }]
    }
  },
  {
    type: 'scatter',
    option: {
      title: { text: 'Price vs Rating' },
      xAxis: {},
      yAxis: {},
      series: [{
        symbolSize: 20,
        data: [[10, 8], [15, 9], [9, 6], [12, 7]],
        type: 'scatter'
      }]
    }
  },
  {
    type: 'donut',
    option: {
      title: { text: 'Device Usage', left: 'center' },
      tooltip: { trigger: 'item' },
      series: [
        {
          name: 'Devices',
          type: 'pie',
          radius: ['40%', '70%'],
          data: [
            { value: 500, name: 'Mobile' },
            { value: 300, name: 'Desktop' },
            { value: 200, name: 'Tablet' }
          ]
        }
      ]
    }
  },
  {
    type: 'map',
    option: {
      title: { text: 'Geo Traffic (World)' },
      tooltip: { trigger: 'item' },
      visualMap: {
        min: 0,
        max: 1000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: { color: ['#e0ffff', '#006edd'] }
      },
      series: [{
        type: 'map',
        map: 'world',
        roam: true,
        data: [
          { name: 'India', value: 800 },
          { name: 'USA', value: 600 },
          { name: 'China', value: 900 }
        ]
      }]
    }
  }
])
</script>
