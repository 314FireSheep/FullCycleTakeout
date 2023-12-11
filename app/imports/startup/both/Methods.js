import { Meteor } from 'meteor/meteor';
import { Orders } from '../../api/order/Order';

const addOrder = 'Order.add';

/** Creates a new project in the Projects collection, and also updates ProfilesProjects and ProjectsInterests. */
Meteor.methods({
  // eslint-disable-next-line meteor/audit-argument-checks
  'Order.add'(order, userId) {
    const id = Orders.collection.insert(order);
    const userToUpdate = Meteor.users.findOne({ username: userId });
    if (userToUpdate) {
      // Update the user's document
      Meteor.users.update(
        { _id: userToUpdate._id },
        { $set: { 'profile.order': [...userToUpdate.profile?.order || [], id] } },
      );
    }
    return id;
  },
});
const returnOrder = 'Order.return';
Meteor.methods({
  // eslint-disable-next-line meteor/audit-argument-checks
  'Order.return'(orderId, status) {
    const id = Orders.collection.update(orderId, { $set: { status: status } });
    return id;
  },
});

export { addOrder, returnOrder };
