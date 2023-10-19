// .global 表示全局，即所有添砖都会插入这个中间件
export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(to, from);
    if (to.path === '/404') {
        console.log('404');
        // 停止导航
        abortNavigation();
        return navigateTo('/');
    }
});
