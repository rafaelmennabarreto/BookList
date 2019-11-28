const Realm = require('realm');

const SchemaNames = {
  BookSchema: 'Book',
};

const bookSchema = {
  name: SchemaNames.BookSchema,
  properties: {
    id: 'string',
    title: 'string',
    imageUrl: 'string',
    description: 'string',
  },
};

async function getDb() {
  return Realm.open({schema: [bookSchema]});
}

async function write(schemaName, value) {
  const db = await getDb();
  return await db.write(() => db.create(schemaName, value));
}

async function getLastId(schemaName) {
  const db = await getDb();
  const lastId = await db
    .objects(schemaName)
    .map(i => i.id)
    .sort()
    .reverse()[0];
  return lastId ? lastId : 0;
}

async function getAll(schemaName) {
  const db = await getDb();
  return db.objects(schemaName) || [];
}

async function deleteAll() {
  const db = await getDb();
  db.write(() => {
    db.deleteAll();
  });
}

async function getById(schemaName, id) {
  const db = await getDb();
  try {
    return await db.objects(schemaName).filter(b => b.id === id)[0];
  } catch {
    return '';
  }
}

async function remove(item) {
  const db = await getDb();
  try {
    await db.write(async () => {
      await db.delete(item);
    });
    return true;
  } catch {
    return false;
  }
}

export default {
  SchemaNames,
  getDb,
  write,
  getLastId,
  getAll,
  deleteAll,
  getById,
  remove,
};
