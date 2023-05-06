export default defineNuxtRouteMiddleware((to) => {
  if ('middleware' in to.query) {
    console.log(to.query);
    return showError('error in middleware');
  }
});
