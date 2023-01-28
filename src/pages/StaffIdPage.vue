<template>
  <div class="main-card">
    <div class="card">
      <div class="content">
        <div class="up">
          <img src="@/../public/photo.jpg" alt="" class="photo">
        </div>
        <h3><strong>Личная информация</strong></h3>
        <p>ID: {{ $route.params.id }}</p>
        <p><strong>Имя:</strong> {{ info.name }}</p>
        <p><strong>Никнейм:</strong>: {{ info.username }}</p>
        <p><strong>Почта:</strong> {{ info.email }}</p>
        <hr>
        <div v-if="info.address">
          <h3><strong>Адрес сотрудника</strong></h3>
          <p><strong>Квартира</strong>: {{ info.address.suite }}</p>
          <p><strong>Город</strong>: {{ info.address.city }}</p>
          <p><strong>Почтовый индекс:</strong> {{ info.address.zipcode }}</p>
          <p><strong>Улица:</strong> {{ info.address.street }}</p>
        </div>
        <hr>
        <h3><strong>Телефон: </strong>{{ info.phone }}</h3>
        <h3><strong>Сайт: </strong> {{ info.website }}</h3>
        <hr>
        <div v-if="info.company">
          <h3>Информация о компании</h3>
          <p><strong>Имя: </strong> {{ info.company.name }}</p>
          <p><strong>Кралатая фраза: </strong> {{ info.company.catchPhrase }}</p>
          <p><strong>Бухгалтерский баланс: </strong> {{ info.company.bs }}</p>
        </div>
      </div>
    </div>
    <!-- <img src="@/../public/i.webp" alt="avatar" style="width:20%"> -->
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      info: {},
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const responce = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`);
        this.info = responce.data
        // console.log(responce)
      } catch (e) {
        console.log('ошибка');
      }
    }
  },

  mounted() {
    this.fetchUsers();
  }
}
</script>

<style scoped>
.main-card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(233, 243, 243);
}

.card {
  background-color: #fff;
  font-family: monospace;
  height: 570px;
  width: 600px;
  border-radius: 5px;
}

.content {
  padding: 0 15px 0 25px;
}

.up {
  display: flex;
  justify-content: space-between;
}

.photo {
  max-width: 350px;
  border: 5px solid #fff;
  border-radius: 5px;
  margin-top: -100px;
}

.social-link {
  color: #000;
}
p {
  font-size: 20px;
}

h3 {
  font-size: 25px;
}

.name {
  font-size: 50px;
  line-height: 0;
  padding-top: 20px;
}
</style>