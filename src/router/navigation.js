module.exports = {
  globalNavigation : function (to, from, next) {
    if(localStorage.getItem('token')){
      next({
        name : 'dashboardPage'
      })
    }else{
      next()
    }
  },
  authNavigation : function (to, from, next) {
    if(!localStorage.getItem('token')){
      next({
        name : 'loginPage'
      })
    }else{
      next()
    }
  }
}