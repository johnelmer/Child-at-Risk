import Collection from '../decorators/Collection'
import Model from './Model'

@Collection('children')

class Child extends Model {
	static add(child) {
		new Child(
			{
				status: "In House"
			}
		).save();
	}
}

export default Child
