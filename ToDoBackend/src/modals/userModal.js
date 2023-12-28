import sql from "../../database.js";

const getUser = async (id) => {
    try {
      // Query to check if the user with the provided email and password exists
      const query = 'SELECT * FROM users WHERE id = ?';
      const [rows] = await sql.execute(query, [id]);
  
      // If user exists, return user information
      if (rows.length > 0) {
        const user = rows[0];
        return user;
      } else {
        console.log('User not found');
        return null; // Return null if user not found
      }
    } catch (error) {
      console.error('Error checking user:', error);
      throw error; // Handle the error appropriately in your application
    }
  };

  export default getUser
