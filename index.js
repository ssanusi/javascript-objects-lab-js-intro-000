var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
}
function deleteFromObjectByKey(object, key) {
  delete object.key;
  
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}