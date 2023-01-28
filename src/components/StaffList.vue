<template>
  <h1 style="text-align:center">Список работников</h1>
  <div v-if="staff.length > 0" class="staff__list">
    <transition-group name="user-list">
      <StaffItem v-for="employee in staff" :userStatus="userStatus" :employee="employee" :key="employee.id"
        @remove="$emit('remove', employee)"
        @changeSelectedStatus="(selectStatus) => changeSelectedStatus({ selectStatus, id: employee.id, employee: employee })" />
    </transition-group>
  </div>
  <h2 v-else style="color:brown">Список работников пуст</h2>
</template>

<script>
import StaffItem from './Staffitem.vue';
export default {
  methods: {
    changeSelectedStatus(employee) {
      if (employee.selectStatus) {
        this.selectedStaff.push(employee);
      } else {
        const index = this.selectedStaff.findIndex(staff => staff.id === employee.id);
        this.selectedStaff.splice(index, 1);
      }
      this.$emit('update:selectedStaff', this.selectedStaff);
    }
  },

  components: {
    StaffItem,
  },
  props: {
    staff: {
      type: Array,
      required: true,
    },
    userStatus: {
      type: Boolean,
    },
    selectedStaff: {
      type: Array,
    }
  }
}
</script>

<style scoped>
.staff__list {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: center;
  max-width: 1400px;
}

.user-list-item {
  display: inline-block;
  margin-right: 10px;
}

.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.user-list-move {
  transition: transform 0.4s ease;
}
</style>