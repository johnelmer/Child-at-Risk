import _ from 'underscore'

class Model {
  constructor(doc = {}) {
    _(this).extend(doc)
  }

  static findAll(where = {}, callback) {
    return this.collection.find(where, callback)
  }

  static findOne(where = {}, callback) {
    return this.collection.findOne(where, callback)
  }

  static remove(doc) {
    if(doc) {
      this.collection.remove(doc._id);
    }
  }

  get doc() {
    const omittedKeys = ['_id']

    for (let key in this) {
      if (_(this[key]).isFunction()) {
        omittedKeys.push(key)
      }
    }

    return _(this).omit(omittedKeys)
  }
  
save(callback) {
  if (!this._id) {
    this.constructor.collection.insert(this.doc, callback)
    console.log("----------"+this.doc);
  }
  else {
    this.constructor.collection.update(this._id, {
      $set: this.doc
    })
  }
}
}

export default Model
