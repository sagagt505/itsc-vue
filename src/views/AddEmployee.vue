<template>
  <div class="add-employee container">
    <h2 class="center-align indigo-text">Add New Employee</h2>

    <div class="row">
      <form class="col s12" @submit="AddEmployee">
        <div class="row">
          <div class="field col s6">
            <input id="first_name" type="text" />
            <label for="first_name">First Name</label>
          </div>
          <div class="field col s6">
            <input id="last_name" type="text" class="validate" />
            <label for="last_name">Last Name</label>
          </div>
        </div>
        <div class="row">
          <div class="field col s12">
            <input id="birthday" type="date" />
            <label for="birthday">Birthday</label>
          </div>
        </div>
        <div class="row">
          <div class="field col s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn">Add Employee</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEmployee",
  data() {
    return {
      first_name: null,
      last_name: null,
      birthday: null,
      email: null,
      feedback: null
    };
  },
  methods: {
    AddEmployee(e) {
      e.preventDefault();
      const newEmployee = {
        first_name: this.first_name,
        last_name: this.last_name,
        birthday: this.birthday,
        email: this.email
      };
        this.$emit("add-employee", newEmployee);
        this.$router.push({ name: "Index" });
    }
  }
};
</script>

<style></style>
