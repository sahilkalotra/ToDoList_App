import sql from "../../database.js";

 const createUser = async (first_name, last_name, email, password) => {
    try {
      const isUsersTableExists = await checkIfUsersTableExists();
  
      if (!isUsersTableExists) {
        await createUsersTable();
      }
  
      const query =
        "INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)";
      const [rows, fields] = await sql.execute(query, [
        first_name,
        last_name,
        email,
        password,
      ]);
  
     // Get the last inserted ID
     const lastInsertId = rows.insertId;
  
     // Retrieve the inserted user information
     const insertedUserInfo = await getUserById(lastInsertId);
  
     // You can check the result if needed
     console.log("User created:", insertedUserInfo);
  
     return insertedUserInfo;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; // Handle the error appropriately in your application
    }
  };
  
  async function getUserById(userId) {
      try {
        const query = "SELECT * FROM users WHERE id = ?";
        const [rows] = await sql.execute(query, [userId]);
    
        if (rows.length === 0) {
          throw new Error(`User with ID ${userId} not found`);
        }
    
        return rows[0]; // Return the user information
      } catch (error) {
        console.error(`Error retrieving user by ID ${userId}:`, error);
        throw error; // Handle the error appropriately in your application
      }
    }
  
  async function checkIfUsersTableExists() {
    try {
      const [rows] = await sql.execute('SHOW TABLES LIKE "users"');
      return rows.length > 0;
    } catch (error) {
      console.error("Error checking if users table exists:", error);
      throw error; // Handle the error appropriately in your application
    }
  }
  
  async function createUsersTable() {
    try {
      const query = `
          CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
          );
        `;
      await sql.execute(query);
      console.log("Table 'users' created.");
    } catch (error) {
      console.error("Error creating users table:", error);
      throw error; // Handle the error appropriately in your application
    }
  }

  export default createUser