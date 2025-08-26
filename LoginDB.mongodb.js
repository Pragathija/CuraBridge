// MongoDB Playground Script

// Select the database to use.
use('curabridge'); // Change to your actual database name if needed

// Insert sample user login credentials into the 'users' collection.
db.users.insertMany([
  { name: 'Alice', email: 'alice@example.com', password: 'hashed_password1' },
  { name: 'Bob', email: 'bob@example.com', password: 'hashed_password2' },
  { name: 'Charlie', email: 'charlie@example.com', password: 'hashed_password3' }
]);

// Find and display all users in the 'users' collection.
db.users.find().forEach(printjson);