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

      <tbody v-for="employee in employees" :key="employee.id">
        <tr>
          <td>{{ employee.firstname }}</td>
          <td>{{ employee.lastname }}</td>
          <td>{{ employee.birthday }}</td>
          <td>{{ employee.email }}</td>
          <td><a class="waves-effect waves-light yellow darken-3 btn"><router-link :to="{name: 'EditEmployee', params: {id: employee.id}}">Update</router-link></a> <a class="waves-effect waves-light red btn" @click="deleteEmployee(employee.id)">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  name: "Index",
  data() {
    return {
      employees: []
    };
  },
  methods: {
    deleteEmployee(id) {
      axios
        .delete("https://dummy-api.cm.edu/employees/${id}")
        .then(res => (this.employees = this.employees.filter(employee => employee.id !== id, res.data)))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => (this.employees = res.data))
      .catch(err => console.log(err));
      
  }
};
</script>

<style>
.index {
  padding: 60px;
}
</style>
