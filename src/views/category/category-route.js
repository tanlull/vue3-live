import { h, resolveComponent } from "vue";
import CategoryIndex from "./CategoryIndex.vue";
import CategoryAdd from "./CategoryAdd.vue";
import CategoryEdit from "./CategoryEdit.vue";

const categoryRutes = [
  {
    path: "category",
    name: "Category",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "CategoryIndex",
        component: CategoryIndex,
      },
      {
        path: "add",
        name: "CategoryAdd",
        component: CategoryAdd,
      },
      {
        path: ":id/edit", //router parameter
        name: "CategoryEdit",
        component: CategoryEdit,
      },
    ],
  },
];

export default categoryRutes;
