import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import AddEmployee from '../views/AddEmployee.vue'
import EditEmployee from "../views/EditEmployee.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/add-employee",
    name: "AddEmployee",
    component: AddEmployee
  },
  {
    path: "/edit-employee/:id",
    name: "EditEmployee",
    component: EditEmployee
  }
];

const router = new VueRouter({
  routes
})

export default router
