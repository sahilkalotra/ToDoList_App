import { createConnection } from "mysql2";

const sql = createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "rootuser",
  database: "todo_app",
}).promise();

export default sql


