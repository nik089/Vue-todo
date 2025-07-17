export function setupAuthGuard(router) {
  router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLogin') === 'true';

    if (to.meta.requiresAuth && !isLoggedIn) {
      next('/'); // redirect to landing page
    } else {
      next(); // proceed to route
    }
  });
}
