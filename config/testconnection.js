
// Import your connectDB function
import connectDB from './database';

// Call the connectDB function to test the connection
const testConnection = async () => {
  try {
    await connectDB();  // Connect to MongoDB
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed', error);
  }
};

// Run the test
testConnection();
