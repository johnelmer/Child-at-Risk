import angular from 'angular'
import angularMeteor from 'angular-meteor'
import uiRouter from 'angular-ui-router'

class GenRoute {
	static config($stateProvider, $urlRouterProvider, $locationProvider) {
	  'ngInject';
	  $locationProvider.html5Mode(true)
	  $urlRouterProvider.otherwise('/children');
	  $stateProvider
	    .state('listChildren', {
	      url: '/children',
	      template: '<children-list></children-list>'
	  })
	    .state('addChildren', {
	      url: '/child/add',
	      template: '<add-child></add-child>'
	  })
	    .state('editChildren', {
	      url: '/child/:childId,',
	      template: '<edit-child></edit-child>'
	  })
	}
}

export default GenRoute
