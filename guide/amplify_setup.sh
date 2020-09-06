yarn add aws-amplify aws-amplify-react-native uuid
yarn add @react-native-community/netinfo 
react-native link @react-native-community/netinfo
yarn global add @aws-amplify/cli
amplify configure
amplify add auth
amplify status
amplify push
amplify add api



Schema
type moviemd @model {
  movieId: ID!
  movieUri: String
  movieTitle: String  
  movieReleaseYear: String  
  movieDescription: String
  user: String
  type: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}

