const db = [];

const create = (obj) => {
  db.push(obj);
}

const findAll = () => {
  return db;
}

const find = (predicate) => {
  return db.find(predicate);
}

const remove = (predicate) => {
  const idx = db.findIndex(predicate);
  db.splice(idx, 1);
}

module.exports = { create, findAll, find, remove };
