import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
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
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
export default function Timeline() {
  const [tweets, setTweet] = useState<ITweet[]>([]);
  useEffect(() => {
    let unsubScribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createdAt", "desc")
      );
      // const snapShot = await getDocs(tweetsQuery);
      // const tweets = snapShot.docs.map((doc) => {
      //   const { tweet, createdAt, userId, username, photo } = doc.data();
      //   return {
      //     tweet,
      //     createdAt,
      //     userId,
      //     username,
      //     photo,
      //     id: doc.id,
      //   };
      // });
      unSubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
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
      });
      console.log(`트윗: ${tweets}`);
    };
    fetchTweets();
    return () => {
      unsubScribe && unsubScribe();
    };
  }, []);
  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
