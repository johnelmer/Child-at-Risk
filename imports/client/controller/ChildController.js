import Child from '../../model/Child'

 class ChildController {
 	constructor($scope, $reactive, $stateParams) {
	  'ngInject';
	    this.child = {};
	    this.childId = $stateParams.childId;
	    $reactive(this).attach($scope);
	    this.helpers({
	      children(){
	        return Child.findAll();
	      },
	      child(){
	        return Child.findOne({
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
 			Child.remove(doc);
 			this.reset();
 		}
 	}

 	save() {
 		// Child.add(this.child)
 		let c =  new Child(this.child)
 		c.status = "In House"
 		c.save()
    	this.reset()
 	}
 }

 export default ChildController
