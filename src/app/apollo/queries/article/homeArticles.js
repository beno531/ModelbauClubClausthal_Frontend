import gql from "graphql-tag";

const HOMEARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      content
      category {
        id
        name
      }
      published_at 
    	user {
        username
      }
      image {
        url
      }
    }
  }
`;

export default HOMEARTICLES_QUERY;
