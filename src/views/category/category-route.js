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
        component: CategoryIndex,
      },
      {
        path: "add",
        component: CategoryAdd,
      },
      {
        path: "edit",
        component: CategoryEdit,
      },
    ],
  },
];

export default categoryRutes;
