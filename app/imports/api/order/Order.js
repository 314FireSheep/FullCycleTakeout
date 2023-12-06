import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class OrdersCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OrdersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);

    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      // Enabling blackbox behavior to accept unknown keys
      blackboxField: {
        type: Object,
        optional: true,
        blackbox: true,
      },
    });
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Orders = new OrdersCollection();
