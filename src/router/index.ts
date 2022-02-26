import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/Temp.vue")
  },
  {
    path: "/stage",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/contact",
    component: () => import("@/views/Contact.vue")
  },
  {
    // the 404 route, when none of the above matches
    path: "/404",
    name: "404",
    component: () => import("@/views/Error404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
