import { collection, getDocs, orderBy, query } from "firebase/firestore";
import styled from "styled-components";
import { db } from "../Firebase.client";
import { useState, useEffect } from "react";
import Tweets from "./Tweet";
import Tweet from "./Tweet";
export interface ITweet {
  id: string;
  photo: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: number;
}
const Wrapper = styled.div``;
export default function Timeline() {
  const [tweets, setTweet] = useState<ITweet[]>([]);
  const fetchTweets = async () => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc")
    );
    const snapsShot = await getDocs(tweetsQuery);
    const tweets = snapsShot.docs.map((doc) => {
      const { tweet, createdAt, userId, username, photo } = doc.data();
      return {
        tweet,
        createdAt,
        userId,
        username,
        photo,
        id: doc.id,
      };
    });
    setTweet(tweets);
    console.log(`트윗: ${tweets}`);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
