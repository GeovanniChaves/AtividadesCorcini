import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'yellow',
      padding: 20
    }}>

      <View style={{
        backgroundColor: 'lightcoral',
        borderWidth: 3,
        borderColor: 'red',
        padding: 15,
        marginBottom: 20
      }}>
        <Text style={{
          fontSize: 18,
          color: 'darkred',
          fontWeight: 'bold'
        }}>
          Lorem ipsum dolor sit amet. Et rerum corrupti qui facilis eaque et 
          itaque debitis qui perspiciatis rerum est facilis minus sit ipsum dolor. 
          Qui dolores autem est dicta odit est magnam consequatur ut culpa itaque! 
          Aut quasi provident ea quia dicta est voluptatem laboriosam sed vitae libero qui culpa repudiandae? 
          Eum ipsum error est reiciendis architecto est assumenda accusamus et incidunt nesciunt.
        </Text>
      </View>

      <View style={{
        backgroundColor: 'lightgreen',
        borderWidth: 3,
        borderColor: 'green',
        padding: 15,
        marginBottom: 20
      }}>
        <Text style={{
          fontSize: 16,
          color: 'green',
          fontStyle: 'italic'
        }}>
          Hic ratione velit qui labore nulla a vitae obcaecati cum aliquam 
          enim et consequuntur dolorem aut voluptatum dolore! Rem molestiae 
          accusantium quo voluptatum Quis ut veritatis quisquam quo pariatur 
          laboriosam est nihil delectus qui quidem corrupti.
        </Text>
      </View>

      <View style={{
        backgroundColor: 'lightblue',
        borderWidth: 3,
        borderColor: 'blue',
        padding: 15
      }}>
        <Text style={{
          fontSize: 20,
          color: 'navy',
          textAlign: 'center'
        }}>
          Eos iusto perferendis et exercitationem exercitationem qui harum ullam 
          qui iste soluta cum doloribus magnam? Et ipsa quos in corporis nulla ut 
          eius nihil et maxime repellendus sed velit maiores.
        </Text>

      </View>

    </View>
  );
}

export default App;