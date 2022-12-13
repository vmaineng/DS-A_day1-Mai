//problem 1 merge sort

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


//console.log(data["results"]["payload"][1]["profile"]["rank"]); //how to get rank of 2 for John
//console.log(data.results.payload) - gets to array of object filled with profiile

//console.log(data["results"]["payload"][1]["profile"].favorites[0].rating); //got rating for Hulk for John

const fakeData = {name: "mai"}

//merge sort by the rank
const mergeSortRank = (obj) => {

// edge case - check if obj's length is <= 1 b/c can assume it's already sorted, return obj as is
if (Object.keys(obj).length <= 1) return obj;
}

console.log(mergeSortRank(fakeData))



//merge sort by the ratings and rank


//problem 2 singly linked list

//problem 3
