
const fetchBooks=async () => {
    const res = await fetch('https://api.example.com/books', { cache: 'no-store' });    
    if (!res.ok) {
        throw new Error('Failed to fetch books');
    }   
    return res.json();
};
