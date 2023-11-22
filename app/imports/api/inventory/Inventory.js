import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */

class BowlCollection {
  constructor() {
    this.name = 'BowlCollection';
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

class BoxCollection {
  constructor() {
    this.name = 'BoxCollection';
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

class ContainerLCollection {
  constructor() {
    this.name = 'BowlCollection';
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
export const Bowl = new BowlCollection();
