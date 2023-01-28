<template>
     <div class="card">
    <div class="content">
      <div class="up">
        <img src="photo.jpg" alt="" class="photo">
      </div>
      <p><strong>Id:</strong> {{ employee.employee.id }}</p>
      <p><strong>Имя: </strong>{{ employee.employee.name }}</p>
      <p><strong>Никнейм: </strong>{{ employee.employee.username }}</p>
      <p><strong>Телефон: </strong>{{ employee.employee.phone }}</p>
      <p><strong>e-mail: </strong>{{ employee.employee.email }}</p>
      <p><strong>website: </strong>{{ employee.employee.website }}</p>
    </div>
  </div>
  
  
  </template>
  
  <script>
  export default {
    props: {
      employee: {
        type: Object,
        required: true,
      },
    },
  }
  
  </script>
  
  <style scoped>
  .card {
  /* background-color: #fff; */
  font-family: monospace;
  height: 250px;
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