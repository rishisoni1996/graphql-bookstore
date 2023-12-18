const authors = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Brown' },
    { id: 4, name: 'Bob White' },
    { id: 5, name: 'Charlie Green' }
];

const books = [
    { id: 1, title: 'Adventure of John', authorId: 1 },
    { id: 2, title: 'John and the Mountain', authorId: 1 },
    { id: 3, title: 'Mystery Tales', authorId: 1 },
    { id: 4, title: 'Stories by John', authorId: 1 },

    { id: 5, title: 'Jane and the Jungle', authorId: 2 },
    { id: 6, title: 'Journey of Jane', authorId: 2 },
    { id: 7, title: 'Jane and the City', authorId: 2 },
    { id: 8, title: 'The Best of Jane', authorId: 2 },

    { id: 9, title: 'Alice in Dreamland', authorId: 3 },
    { id: 10, title: 'Alice and the Stars', authorId: 3 },
    { id: 11, title: 'Mysteries with Alice', authorId: 3 },
    { id: 12, title: 'Alice and Friends', authorId: 3 },

    { id: 13, title: 'Bob and the Sea', authorId: 4 },
    { id: 14, title: 'Stories from Bob', authorId: 4 },
    { id: 15, title: 'Bob\'s Adventure', authorId: 4 },
    { id: 16, title: 'Journey with Bob', authorId: 4 },

    { id: 17, title: 'Charlie\'s World', authorId: 5 },
    { id: 18, title: 'Charlie and the Forest', authorId: 5 },
    { id: 19, title: 'Mysteries of Charlie', authorId: 5 },
    { id: 20, title: 'The Life of Charlie', authorId: 5 }
];

module.exports = {
    authors,
    books
}