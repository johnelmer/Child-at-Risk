import { Meteor } from 'meteor/meteor'
import Child from '/imports/model/Child'

Meteor.startup(() => {
  if(Child.findAll().count() === 0) {
    const children = [{
      firstName: "Juan",
      lastName: "De La Cruz",
      middleName: "Santos",
      nickname: "Juan",
      sex: "Male",
      birthday: "January 1, 1990",
      status: "In House",
      reason: "orphan"
    }];

    children.forEach((child) => {
      (new Child(child)).save()
    });
  }
});