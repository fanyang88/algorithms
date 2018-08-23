/*
Design a simplified version of Twitter where users can post tweets, 
follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. 
Your design should support the following methods:
postTweet(userId, tweetId): Compose a new tweet.
getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. 
Each item in the news feed must be posted by users who the user followed or by the user herself. 
Tweets must be ordered from most recent to least recent.
follow(followerId, followeeId): Follower follows a followee.
unfollow(followerId, followeeId): Follower unfollows a followee.
Example:
Twitter twitter = new Twitter();
// User 1 posts a new tweet (id = 5).
twitter.postTweet(1, 5);
// User 1's news feed should return a list with 1 tweet id -> [5].
twitter.getNewsFeed(1);
// User 1 follows user 2.
twitter.follow(1, 2);
// User 2 posts a new tweet (id = 6).
twitter.postTweet(2, 6);
// User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.getNewsFeed(1);
// User 1 unfollows user 2.
twitter.unfollow(1, 2);
// User 1's news feed should return a list with 1 tweet id -> [5],
// since user 1 is no longer following user 2.
twitter.getNewsFeed(1);
*/

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    // data structure for each user
    /*
        user {userID : id, followees: [fId], twitters: [{tID: tid, TS: + new Date()]}
        var users =[user]
    */
    this.timer = 0;
    this.users = {};
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    // not only put twitter in its own, but also check followers and put twitters in followers twitters
    if(this.users[userId]) {
        this.users[userId].twitters.unshift({tID: tweetId, TS: this.timer++});
    } else {
        this.users[userId] = {followees: [],twitters: [{tID: tweetId, TS: this.timer++}]};
    }
    return this.users;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    var news = [];
    if(this.users[userId]) {
        news = this.users[userId].twitters; // its own twitters
        news = this.users[userId].followees.reduce((all, followee) => {
            return all.concat(this.users[followee].twitters);
        }, news);
    }
    return news.sort((a, b)=> b.TS - a.TS).slice(0, 10).map(item => item.tID);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.users[followeeId] && this.users[followerId]) {
        if(followerId === followeeId) {  // follow itself, no need to do nothing
            return;
        }
        if(this.users[followerId].followees.indexOf(followeeId) < 0) {
            this.users[followerId].followees.push(followeeId);
        }
        
    } else if(this.users[followerId] && !this.users[followeeId]){
        // create followeeId
        this.users[followeeId] = {followees: [],twitters: []};
        this.users[followerId].followees.push(followeeId);
    } else if(!this.users[followerId] && this.users[followeeId]){
        // create followerId
        this.users[followerId] = {followees: [followeeId],twitters: []};
    } else {
        // both not exist
        this.users[followeeId] = {followees: [],twitters: []};
         if(followerId === followeeId) {
            return;
        }
        this.users[followerId] = {followees: [followeeId],twitters: []};
    }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.users[followerId]) {
        this.users[followerId].followees = this.users[followerId].followees.filter(fId => fId !== followeeId);
    }
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
