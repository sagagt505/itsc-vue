<template>
  <div class="index container">
    <router-link :to="{ name: 'AddEmployee' }"><a class="waves-effect waves-light btn">Add Employee</a></router-link>
    <table class="striped">
      
        <thead>
          <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Birthday</th>
              <th>Email</th>
              <th>Operation</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
            <td>$0.87</td>
            <td>$0.87</td>
            <td><a class="waves-effect waves-light btn">Update</a> <a class="waves-effect waves-light btn">Delete</a></td>
          </tr>
          
        </tbody>
      </table>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';
export default {
  name: 'Index',
  data(){
    return{
      employee: []
    }
  },
  components: {

  },
  methods:{
    deleteEmployee(id){
      axios.delete('https://dummy-api.cm.edu/employees/${id}')
      .then(res => this.todos = this.todos.filter(todo => todo.id !== id, res.data))
          .catch(err => console.log(err));
    }
  },
  created() {
    axios.get('https://dummy-api.cm.edu/employees')
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }
  
}
</script>

<style>
  .index{
    padding: 60px;
  }
</style>
