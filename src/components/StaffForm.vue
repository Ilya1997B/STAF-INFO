<template>
  <form @submit.prevent>
    <p v-if="errors.length !== 0">
      <b>Пожалуйста исправьте указанные ошибки:</b>
    <ul>
      <li v-for="error in errors"><i>{{ error }}</i></li>
    </ul>
    </p>
    <h4>Создание сотрудника</h4>
    <MyInput v-focus v-model="employee.name" type="text" placeholder="Имя" />
    <MyInput v-model="employee.username" type="text" placeholder="Никнейм" />
    <MyInput v-model="employee.phone" type="text" placeholder="Номер телефона" />
    <MyInput :style="{ 'background-color': correctInput ? 'LightGreen' : 'Pink' }" v-model="employee.email" type="email" placeholder="e-mail"
      @input="checkMail" />
    <MyInput v-model="employee.website" type="text" placeholder="сайт" />

    <MyButton class="btn" @click="createEmployee">Создать</MyButton>
  </form>
</template>

<script>

export default {
  data() {
    return {
      employee: {
        name: null,
        username: null,
        number: null,
        email: null,
        website: null,
      },
      errors: [],
      correctInput: false,
    }
  },
  methods: {
    checkMail() {
      if (this.isEmailValid(this.employee.email)) {
        this.correctInput = true;
      } else {
        this.correctInput = false;
      }

    },

    isEmailValid(value) {
      const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      return EMAIL_REGEXP.test(value);
    },

    createEmployee(e) {
      if (this.employee.name && this.employee.number && this.employee.email) {
        return true;
      }
      this.errors = [];

      if (!this.employee.name) {
        this.errors.push('Требутся указать имя!')
      }

      if (!this.employee.phone) {
        this.errors.push('Требутся указать номер телефона!')
      }

      if (!this.employee.email) {
        this.errors.push('Требуется указать почту!');
      }
      if (!this.correctInput) {
        this.errors.push('Некорректный email!')
      }

      e.preventDefault();

      if (this.errors.length === 0 && this.correctInput) {
        this.employee.id = Date.now();
        this.$emit('create', this.employee);
        this.employee = {
          name: '',
          username: '',
          number: '',
          email: '',
          website: '',
        }
      }
    },
  }
}

</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

li {
  list-style-type: none;
  color: red;
}

.isTrue {
  color: green;
}

.isFalse {
  color: red
}
</style>