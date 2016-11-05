import angular from 'angular'
import angularMeteor from 'angular-meteor'
import uiRouter from 'angular-ui-router'
import ngMaterial from 'angular-material'
// import ngFileUpload from 'ng-file-upload'
import Route from '../route/Route'

const name = 'child'

export default angular.module(name, [
  angularMeteor,
  ngMaterial,
  uiRouter
  // ngFileUpload
])
  .config(Route.config);
