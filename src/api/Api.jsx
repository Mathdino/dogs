import React from "react";
import UserPost from "./endpoints/UserPost";
import TokenPost from "./endpoints/TokenPost";
import PhotoPost from "./endpoints/PhotoPost";
import PhotoGet from "./endpoints/PhotoGet";

const Api = () => {
  return (
    <>
      <h2>User POST</h2>
      <UserPost />
      <h2>Token POST</h2>
      <TokenPost />
      <h2>Photo POST</h2>
      <PhotoPost />
      <h2>Photo GET</h2>
      <PhotoGet />
    </>
  );
};

export default Api;
