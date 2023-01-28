<template>
  <div class="page-container">
    <!-- <h1>Персонал</h1> -->
    <div class="select__container">
      <MyInput :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск...." v-focus />
      <MySelect class="select" :model-value="selectedSort" :options="sortOptions"
        @update:model-value="setSelectedSort" />
    </div>
    <div class="switch">
      <h2>Администратор</h2>
      <label class="switch__btn">
        <input type="checkbox" @input="changeUserStatus" :checked="userStatus">
        <span class="slider round"></span>
      </label>
    </div>

    <MyButton v-if="userStatus" @click="showDialog" style="margin:15px 0">Создать сотрудника</MyButton>

    <MyDialog v-model:show="dialogVisible">
      <StaffForm @create="createEmployee" />
    </MyDialog>
    <!-- {{ selectedStaff }} -->
    <StaffList :staff="sortedAndSearchedStaff" :userStatus="userStatus" @remove="removeEmploee" v-if="!isPostLoading"
      :selectedStaff="selectedStaff" />
    <div v-else> Идет загрузка....</div>
    <!-- <div v-intersection="fetchPosts" class="observer"></div> -->
    <router-link to="/comparePage">
      <MyButton v-if="selectedStaff.length !== 0">Сравнить</MyButton>
    </router-link>
    <div class="page__wrapper">
      <div v-for="pagenumber in totalPages" :key="pagenumber" class="page" :class="{
        'current-page': page === pagenumber
      }" @click="changePage(pagenumber)">{{ pagenumber }}</div>
    </div>

  </div>
</template>

<script>
import StaffForm from "@/components/StaffForm";
import StaffList from "@/components/StaffList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'


export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    StaffList, StaffForm
  },

  data() {
    return {
      dialogVisible: false,
      selectedStaffEmpty: [],
    }
  },

  methods: {
    ...mapMutations({
      setStaff: 'staff/setStaff',
      setPage: 'staff/setPage',
      setSearchQuery: 'staff/setSearchQuery',
      setSelectedSort: 'staff/setSelectedSort',
      setUserStatus: 'staff/setUserStatus',
      setSelectedStaff: 'staff/setSelectedStaff'
    }),
    ...mapActions({
      loadMorePosts: 'staff/loadMorePosts',
      fetchPosts: 'staff/fetchPosts',
    }),

    createEmployee(employee) {
      this.staff.push(employee);
      this.dialogVisible = false;
    },
    removeEmploee(employee) {
      this.setStaff(this.staff.filter(p => p.id !== employee.id));
    },
    showDialog() {
      this.dialogVisible = true;
    },

    changePage(pageNumber) {
      this.setPage(pageNumber);
      this.fetchPosts();
    },

    changeUserStatus() {
      this.setUserStatus(this.userStatus);
    },

    // changeSelectedStatus() {
    //   this.setSelectedStaff(this.selectedStaff);
    // }
  },
  mounted() {
    this.fetchPosts();
  },

  watch: {
  },
  computed: {
    ...mapState({
      staff: state => state.staff.staff,
      modificatorValue: state => state.staff.modificatorValue,
      isPostLoading: state => state.staff.isPostLoading,
      selectedSort: state => state.staff.selectedSort,
      searchQuery: state => state.staff.searchQuery,
      totalPages: state => state.staff.totalPages,
      page: state => state.staff.page,
      limit: state => state.staff.limit,
      sortOptions: state => state.staff.sortOptions,
      userStatus: state => state.staff.userStatus,
      selectedStaff: state => state.staff.selectedStaff,
    }),
    ...mapGetters({
      sortedStaff: 'staff/sortedStaff',
      sortedAndSearchedStaff: 'staff/sortedAndSearchedStaff',
    })
  }
}
</script>

<style>
.select__container {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
}

.select {
  float: right;
}

.page {
  align-items: center;
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid green;
}

.observer {
  height: 30px;
  background: coral;
}

.switch {
  margin-top: 10px;
  display: flex;
}

.switch__btn {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  margin-left: 10px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}


input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>