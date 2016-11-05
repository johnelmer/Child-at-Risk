import Child from '../../model/Child'

 class ChildController {
 	constructor($scope, $reactive, $stateParams) {
	  'ngInject';
	    this.child = {};
	    this.childId = $stateParams.childId;
	    $reactive(this).attach($scope);
	    this.helpers({
	      children(){
	        return child.findAll();
	      },
	      child(){
	        return child.findOne({
	          _id: $stateParams.childId
	        });
	      }
	    });
 	}

 	reset() {
 		this.child = {};
 	}

 	delete(doc) {
 		if(doc) {
 			child.remove(doc);
 			this.reset();
 		}
 	}

 	save() {
 		new child(this.child).save()
    	this.reset()
 	}
 }

 export default ChildController
