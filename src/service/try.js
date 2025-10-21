

const fetchBooks = async () =>{
    try {
    const response = await fetch('http://localhost:3000/api/books');
        return await response.json();
    } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
    
    }};
    
    export { fetchBooks } ;

