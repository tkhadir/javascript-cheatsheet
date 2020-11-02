var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db'); //:memory:

let create_json_table_demo = 'CREATE TABLE t1 (jdoc JSON)'
let insert_json_demo = 'INSERT INTO t1 VALUES(\'{"key1": "value1", "key2": "value2"}\')'
let select_json_demo = 'SELECT * from t1'
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i)
  }
  stmt.finalize()
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info)
  });
 
  db.run(create_json_table_demo)
  db.run(insert_json_demo)
  db.each(select_json_demo, (err, row) => {
    console.log(row.jdoc)
  })
});
 
db.close()
