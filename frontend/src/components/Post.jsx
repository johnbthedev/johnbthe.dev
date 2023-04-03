import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts {
      data {
        id
        attributes {
          title
          content
        }
      }
    }
  }
`;

export default function Post() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.data.map(({ id, attributes }) => (
    <div key={id}>
      <h2>{attributes.title}</h2>
      <p>{attributes.content}</p>
    </div>
  ));
}
