import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The OrderCollection. It encapsulates state and variable values for orders.
 */
class OrderCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OrdersCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      orderID: String,
      orderUser: String,
      orderDate: Date,
      orderStatus: {
        type: String,
        // returned refers to the process of counting the rentals
        allowedValues: ['pending', 'prepared', 'ongoing', 'overdue', 'returned', 'complete'],
        defaultValue: 'pending',
      },
      order: Array,
      'order.$': {
        type: Object,
        blackbox: true,
      },

    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
  }
}

/**
 * The singleton instance of the OrdersCollection.
 * @type {OrdersCollection}
 */
export const Orders = new OrderCollection();
