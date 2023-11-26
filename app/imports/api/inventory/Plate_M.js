import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
class PLateMCollection {
  constructor() {
    this.name = 'PlateMCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      ID: String,
      status: {
        type: String,
        allowedValues: ['in stock', 'out of stock'],
        defaultValue: 'in stock',
      },
    });
  }
}
export const Plate_M = new PLateMCollection();
