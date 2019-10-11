<template>
  <div class="login">

    <Card class="login-card">
      <p slot="title">教学楼信息管理系统</p>
      <div class="user-info">
        <div class="user-name">
          <label for="user">用户名：</label>
          <Input id="user" v-model="username" prefix="ios-contact"  :autofocus="true" placeholder="请输入用户名" style="width: auto" />
        </div>
        
        <div class="user-pass">
          <label for="pass">密码：</label>
          <Input id="pass" v-model="password" prefix="md-eye-off" type="password" placeholder="请输入密码" style="width: auto" />
        </div>
        
        <br>

        <Button type="primary" @click="login">登录</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.username !== '' && this.password !== '') {
        localStorage.setItem("token","asdasd");
        this.$router.replace("/");
      } else {
        this.$Message.error({
          content: "请填写完整的用户信息",
          duration: 2
        });
      }
    }
  }
}
</script>

<style lang="less">
.login {
  height: 100%;
  background: #5cadff;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-card {
    width: 650px;
    height: 300px;

    .user-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 20px; 

      .user-pass {
        margin: 30px 0 10px;
      }
      
      label {
        display: inline-block;
        width: 70px;
      }
    }
  }
}
</style>
