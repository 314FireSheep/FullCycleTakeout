import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class OrdersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OrdersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define names for ublications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {OrderssCollection}
 */
export const Orders = new OrdersCollection();
