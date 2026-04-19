import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";
import type { Votes, VoteType } from "../types/votes";
import { useState } from "react";
import VoteStats from "./VoteStats";
import Notification from "./Notification";

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};


export default function App(){
 const [Vote, setVote] = useState<Votes>(initialVotes);     
 
  function handleVote (event: VoteType): void {
    setVote(prev => ({
        ...prev,
        [event]:prev[event] + 1,
    }));
  };

  function resetVotes(): void {
    setVote(initialVotes)
  }
  const totalVotes = Vote.bad + Vote.good + Vote.neutral;
    const positiveRate = totalVotes
    ? Math.round((Vote.good / totalVotes) * 100)
        : 0
    return (
    <>
    <div className={css.app}>
        <CafeInfo/>
        <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        />
        {totalVotes > 0 ? (
        <VoteStats
        votes={initialVotes}
        totalVotes={totalVotes}
        positiveRate={positiveRate}
        /> ) : (
        <Notification/>) } 
        </div>
    </>
    )
}