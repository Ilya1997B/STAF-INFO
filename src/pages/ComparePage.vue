<template>
  <h2 style="text-align:center">Список работников для сравнения</h2>
  <div class="staff__list">
    <transition-group name="user-list">
      <CompareItem v-for="employee in $store.state.staff.selectedStaff" :employee="employee" />
    </transition-group>
    {{ employee }}
  </div>
</template>

<script>
import CompareItem from '@/components/CompareItem.vue';
export default {
  components: {
    CompareItem,
  },
  props: {
    staff: {
      type: Array,
      // required: true,
    },
  }
}
</script>

<style scoped>
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

.staff__list {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: center;
  max-width: 1400px;
}
h2{
  margin-top: 20px;
}
</style>