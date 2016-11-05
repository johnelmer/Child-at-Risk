function Collection(name) {
  return function(theClass) {
    theClass.collection = new Mongo.Collection(name, {
      transform(doc) {
        return new theClass(doc)
      }
    })
  }
}

export default Collection
