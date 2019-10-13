<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="100" v-model="isCollapsed" width="200">
        <Menu 
          :active-name="menuIndex"
          theme="dark"
          width="auto"
          :class="menuitemClasses"
          @on-select="selectMenu($event)"
        >
          <MenuGroup title="功能列表">
            <MenuItem :name="idx" v-for="(item,idx) in menuText" :key="idx">
              <Icon :type="item.icon"/>
              <span>{{item.text}}</span>
            </MenuItem>
          </MenuGroup>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
          <div class="right-header">
            <h2>教学楼信息管理系统</h2>
            <div>
              <Button type="warning" @click="logout">注销</Button>
            </div>
          </div>
        </Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
            <BreadcrumbItem>{{menuText[menuIndex].text}}</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div style="height: 800px">
              <tb-info v-show="menuIndex == 0"/>
              <tbc-info v-show="menuIndex == 1"/>
              <c-list v-show="menuIndex == 2"/>
              <t-list v-show="menuIndex == 3"/>
            </div>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import tbInfo from "./tbInfo.vue"
import tbcInfo from "./tbcInfo.vue"
import cList from "./cList.vue"
import tList from "./tList.vue"

  export default {
    components: {
      tbInfo,
      tbcInfo,
      cList,
      tList
    },

    data () {
      return {
        isCollapsed: false, // 侧边栏是否收起
        menuIndex: 0,
        menuText: [
          {
            text: "教学楼信息管理", icon: "ios-navigate"
          },
          {
            text: "教学楼课程管理", icon: "ios-book"
          },
          {
            text: "课程列表", icon: "ios-list-box"
          },
          {
            text: "教师列表", icon: "ios-contact"
          }
        ]
      };
    },

    computed: {
      menuitemClasses: function () {
        return [
          this.isCollapsed ? 'collapsed-menu menu-item' : ''
        ]
      }
    },

    created(){
      this.isLogin();
    },

    methods: {
      // 检查登录状态
      isLogin() {
        let token = localStorage.getItem("token");
        if (!token) {
          this.$router.replace("/login");
        }
      },

      logout() {
        const msg = this.$Message.loading({
          content: '注销中...',
          duration: 0
        });
        setTimeout(() => {
          msg();
          localStorage.removeItem("token");
          this.isLogin();
        }, 2000);
      },

      selectMenu(e) {
        this.menuIndex = e
      }
    }
  }
</script>

<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

    .right-header {
      display: flex;
      justify-content: space-between;
    }
</style>
