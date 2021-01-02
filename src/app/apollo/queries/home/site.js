import gql from "graphql-tag";

const Home_QUERY = gql`
query Home {
    home {
    	title
        subtitle
        headertitle
        headertext
        headervideo
        {
            url
        }
    }
  }
`;

export default Home_QUERY;
