import React from "react";
import { useLoaderData } from "react-router-dom";
const GithubFollowers = () => {
  const data = useLoaderData();
  return (
    <>
      <h2>Name:{data?.name}</h2>
      <img src={data?.avatar_url} />
      <h1>Followers:{data?.followers}</h1>
    </>
  );
};
export default GithubFollowers;
export const githubdata = async () => {
  const response = await fetch("https://api.github.com/users/Naba-cloud");
  return response?.json();
};
