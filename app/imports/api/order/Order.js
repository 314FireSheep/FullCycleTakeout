import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/** Encapsulates state and variable values for this collection. */
class OrdersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OrdersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      status: {
        type: String,
        allowedValues: ['pending', 'returned', 'rented'],
        defaultValue: 'pending',
      },
    });
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Orders = new OrdersCollection();
