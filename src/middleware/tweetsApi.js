import {
    _getTweets,
    _saveTweet
  } from './_DATA.js'

export function getInitialData () {
    return Promise.all([
      _getTweets(),
    ]).then(([tweets]) => ({
      tweets
    }))
  }

  export function saveTweet (info) {
    return _saveTweet(info)
  }

  export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }
