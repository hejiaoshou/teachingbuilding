<template>
  <div>
    <div class="header-box">
      <Button type="primary" @click="modal1 = true">添加教师</Button>
    </div>
    
    <Table height="700" :columns="columns1" :data="allTeacherInfo">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="editInfo(index)">编辑</Button>
        <Button type="error" size="small" @click="removeTeacher(index)">移除</Button>
      </template>
    </Table>

    <Modal
      v-model="modal1"
      :title="edit ? '更新教师信息' : '添加教师'"
      :ok-text="edit ? '更新' : '添加'"
      cancel-text="取消"
      @on-ok="addTeacher"
      @on-cancel="cancel">

      <Form :model="addTeacherInfo" label-position="left" :label-width="90">
        <FormItem label="姓名(必填)">
          <Input v-model="addTeacherInfo.name"/>
        </FormItem>
        <FormItem label="年龄(必填)">
          <Input v-model="addTeacherInfo.age" type="number"/>
        </FormItem>
        <FormItem label="性别(必填)">
          <RadioGroup v-model="addTeacherInfo.sex">
            <Radio label="女"></Radio>
            <Radio label="男" style="margin-left: 20px"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="专业(必填)">
          <Input v-model="addTeacherInfo.major"/>
        </FormItem>
        <FormItem label="职称(必填)">
          <Input v-model="addTeacherInfo.title"/>
        </FormItem>
        <FormItem label="电话(必填)">
          <Input v-model="addTeacherInfo.phone" :maxlength="11" type="tel"/>
        </FormItem>
      </Form>

    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addTeacherInfo: {
        name: '',
        age: '',
        sex: '',
        major: '',
        title: '',
        phone: '',
      },
      edit: false,
      editIndex: null,
      modal1: false,
      columns1: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "性别",
          key: "sex"
        },
        {
          title: "专业",
          key: "major"
        },
        {
          title: "职称",
          key: "title"
        },
        {
          title: "电话",
          key: "phone"
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        } 
      ],
      allTeacherInfo: []
    };
  },

  created() {
    this.fecheTeacherList();
  },

  methods: {
    // 移除老师
    async removeTeacher(index) {
      var res = await this.axios.post('/teacher/remove',{
        id: this.allTeacherInfo[index]._id
      });
      if (res.status == 200) {
        if (res.data.data.deletedCount) {
          this.allTeacherInfo.splice(index,1);
          this.$Message.success({
            content: "删除成功",
            duration: 2
          });
        }
      }
    },

    // 编辑信息
    editInfo(index) {
      this.edit = true;
      this.editIndex = index;
      this.modal1 = true;
      this.addTeacherInfo = this.shaollowCopy(this.allTeacherInfo[index]);
    },

    // 添加老师 or 更新信息
    async addTeacher() {
      if (!this.edit) {
        let res = await this.axios.post('/teacher/add',this.addTeacherInfo);
        if (res.status == 200) {
          if (res.data.code == 1) {
            this.allTeacherInfo.push(res.data.data)
            this.cancel()
          }
        }
      } else {
        let res = await this.axios.post('/teacher/update',this.addTeacherInfo)
        if (res.data.data.ok == 1) {
          if (this.editIndex !== null) {
            this.$set(this.allTeacherInfo,this.editIndex,this.shaollowCopy(this.addTeacherInfo))
            this.editIndex = null
            this.cancel()
          }
        }
      }
    },

    async fecheTeacherList() {
      var res = await this.axios.get('/teacher/list');
      if (res.status == 200) {
        if (res.data.code == 1) {
          this.allTeacherInfo = res.data.data
        }
      }
    },

    // 清理掉填写的数据
    cancel() {
      if (this.edit) {
        this.edit = false
      }
      for (const key in this.addTeacherInfo) {
        if (this.addTeacherInfo.hasOwnProperty(key)) {
          this.addTeacherInfo[key] = '';
        }
      }
    }
  }
};
</script>

<style lang="less">
.header-box {
  margin: 10px;
}
</style>