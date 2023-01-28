<template>
  <div class="navbar">
    <div>
      <MyButton style="margin-bottom: 10px"  @click="goPage('/')">Главная</MyButton>
    </div>
    <div class="navbar__btns">
      <MyButton @click="goPage('/about')" style="margin-left: 20px">О сайте</MyButton>
      <MyButton @click="goPage('/staffpage')" style="margin-left: 20px">Персонал</MyButton>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      emtyCompareUsers: [],
    }
  },
  methods: {
    goPage(path) {
      this.$router.push(path);
      this.setSelectedStaff([]);
      // this.setUserStatus(this.userStatus);
    },
    ...mapMutations({
      setSelectedStaff: 'staff/setSelectedStaff',
      // setUserStatus: 'staff/setUserStatus',
    }),
  },
  computed: {
    ...mapState({
      selectedStaff: state => state.staff.selectedStaff,
      // userStatus: state => state.staff.userStatus,
    }),
  }
}
</script>

<style scoped>
.navbar {
  height: 70px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
  min-width: 1400px;
}

.navbar__btns {
  margin-left: auto;
  margin-bottom: 10px;
}
</style>