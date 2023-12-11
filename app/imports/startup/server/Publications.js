import { Meteor } from 'meteor/meteor';
import { Orders } from '../../api/order/Order';

Meteor.publish(Orders.userPublicationName, () => Orders.collection.find());
// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
