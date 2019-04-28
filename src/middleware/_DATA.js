let tweets = {
  t1: {
    author: "abhishek",
    id: "t1",
    text: "So this is my first tweet !!! Cheers !!!",
    timestamp: 1518043995650
  },
  t2: {
    author: "abhishek",
    id: "t2",
    text: "Here i am with my second tweet",
    timestamp: 1518122597860
  }
};

export function _getTweets() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...tweets }), 1000);
  });
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatTweet ({ text, author }) {
  return {
    author,
    id: generateUID(),
    text,
    timestamp: Date.now()
  }
}

export function _saveTweet ({ text, author }) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet({
      text,
      author
    })

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet,
      }

      res(formattedTweet)
    }, 1000)
  })
}
