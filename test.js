const data = {
    results: {
      payload: [
        {
          profile: {
            name: "Tony",
            rank: 9,
            favorites: [
              {
                title: "Spider-Man",
                rating: 5,
              },
              {
                title: "Spongebob",
                rating: 9,
              },
            ],
          },
        },
        {
          profile: {
            name: "John",
            rank: 2,
            favorites: [
              {
                title: "Hulk",
                rating: 1,
              },
              {
                title: "Top Gun",
                rating: 8,
              },
            ],
          },
        },
      ],
    },
  };

  for (let i in data.results.payload) {
    console.log( data.results.payload[i].profile.rank);
  } 
  
  // data.results.payload[i].profile.rank => 9, 2 ;; it gets the rank

  // i, 

  //data.results.payload[i], this got the object for profile