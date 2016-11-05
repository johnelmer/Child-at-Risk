import angular from 'angular'
import angularMeteor from 'angular-meteor'

import ChildController from '../../controller/ChildController'

import template from '../_app.html'
import naviTemplate from '../navigation.html'
import listTemplate from './list.html'
import addTemplate from './add.html'
import editTemplate from './edit.html'

const name = 'app'
const navigation = 'navigation'
const list = 'childrenList'
const add = 'addChild'
const edit = 'editChild'

export default angular.module('child')
  .component(name, {
  template,
  controllerAs: name,
  controller: ChildController
})
  .component(navigation, {
  template: naviTemplate,
  controllerAs: navigation
})
  .component(list, {
  template: listTemplate,
  controllerAs: list,
  controller: ChildController
})
  .component(add, {
  template: addTemplate,
  controllerAs: add,
  controller: ChildController
})
  .component(edit, {
  template: editTemplate,
  controllerAs: edit,
  controller: ChildController
})
