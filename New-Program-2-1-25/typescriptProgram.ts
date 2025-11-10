// Define a type for the data fetched (assuming it's of the same structure)

interface CommentData {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
  
// Function to fetch data from a URL and handle errors
const fetchData = async (url: string): Promise<CommentData | null> => { 
    try {
      const res = await fetch(url); //Note:- This Line Error show fetch in defind js
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }
      const data: CommentData = await res.json();
      return data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
      return null; // Return null if the request fails
    }
};
  
// Async function to handle multiple fetch requests
const fetchAllData = async (): Promise<void> => {
    const url1 = "https://jsonplaceholder.typicode.com/comments/1";
    const url2 = "https://jsonplaceholder.typicode.com/comments/2";
    const url3 = "https://jsonplaceholder.typicode.com/comments/3";
  
    // Use Promise.allSettled to handle all fetches and errors independently
    const results = await Promise.allSettled([
      fetchData(url1),
      fetchData(url2),
      fetchData(url3),
    ]);
  
    const [data1, data2, data3] = results;
  
    // Check each result for success or failure
    if (data1.status === "fulfilled") {
      console.log("Data Ajit 1:", data1.value);
    } else {
      console.log("Data Ajit 1 failed:", data1.reason);
    }
  
    if (data2.status === "fulfilled") {
      console.log("Data Ram 2:", data2.value);
    } else {
      console.log("Data Ram 2 failed:", data2.reason);
    }
  
    if (data3.status === "fulfilled") {
      console.log("Data Adhash 3:", data3.value);
    } else {
      console.log("Data 3 failed:", data3.reason);
    }
};
  
fetchAllData();
  