<template>
  <div class="card">
    <div class="content">
      <div class="up">
        <img src="photo.jpg" alt="" class="photo">
      </div>
      <p><strong>Id:</strong> {{ employee.id }}</p>
      <p><strong>Имя: </strong>{{ employee.name }}</p>
      <p><strong>Никнейм: </strong>{{ employee.username }}</p>
      <p><strong>Телефон: </strong>{{ employee.phone }}</p>
      <p><strong>e-mail: </strong>{{ employee.email }}</p>
      <p><strong>website: </strong>{{ employee.website }}</p>
    </div>
    <div class="post-btns__wrapper">
      <div class="post__btns">
        <MyButton @click="$router.push(`/posts/${employee.id}`)">Подробная ифнормация</MyButton>
        <MyButton v-if="userStatus && $store.state.staff.selectedStaff.length === 0" @click="$emit('remove', employee)">
          Удалить</MyButton>
      </div>
    </div>
    <div v-if="userStatus" class="input">
      <label><input  type="checkbox" @input="changeSelectedStatus" :checked="$store.state.staff.selectedStaff.find(el => el.id === employee.id)"> Сравнить</label>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      selected: false,
    }
  },

  methods: {
    changeSelectedStatus() {
      this.selected = !this.selected;
      this.$emit('changeSelectedStatus', this.selected);
    }
  },

  props: {
    employee: {
      type: Object,
      required: true,
    },
    userStatus: {
      type: Boolean,
    }
  },
}

</script>

<style scoped>
p {
  margin-top: 5px;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.post__btns {
  display: flex;
  margin: 0 -5px;
}

.post-btns__wrapper{
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

.input {
  display: flex;
  margin-left: 40%;
  font-size: 15px;
}

.card {
  /* background-color: #fff; */
  font-family: monospace;
  height: 330px;
  width: 400px;
  border-radius: 5px;
  background-color: rgb(233, 243, 243);
  margin: 10px 15px;
}

.content {
  padding: 0 15px 0 25px;
}

.up {
  display: flex;
  justify-content: space-between;
}

.photo {
  max-width: 150px;
  border: 5px solid #fff;
  border-radius: 5px;
  margin-top: 10px;
}
</style>