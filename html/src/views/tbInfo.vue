<template>
  <div>
    <Table border :columns="columns1" :data="data1">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.campus }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "校区",
          key: "campus",
          align: 'center'
        },
        {
          title: "教学楼",
          key: "tower",
          align: 'center'
        },
        {
          title: "教室",
          key: "class",
          align: 'center'
        },
        {
          title: "总排课数量",
          key: "amount",
          align: 'center'
        },
        {
          title: "总排课率（%）",
          key: "rate",
          align: 'center'
        },
        {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
        }
      ],
      data1: [
        {
          campus: "A区",
          tower: "第一教学楼",
          class: 101,
          amount: 2,
          rate: 40
        },
        {
          campus: "B区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },
        {
          campus: "C区",
          tower: "第八教学楼",
          class: 101,
          amount: 1,
          rate: 20
        },
        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },        {
          campus: "D区",
          tower: "综合楼",
          class: 101,
          amount: 1,
          rate: 20
        },
      ]
    };
  }
};
</script>

<style>
</style>