export default Factor => {
  return {
    core: {
      components: {
        btn: () => import("./el/btn.vue"),
        btnApp: () => import("./el/btn-app.vue"),
        loadingRing: () => import("./el/loading-ring.vue"),
        modal: () => import("./el/modal.vue"),
        modalApp: () => import("./el/modal.vue"),
        lightbox: () => import("./el/lightbox.vue"),
        link: () => import("./el/link.vue")
      }
    }
  }
}
