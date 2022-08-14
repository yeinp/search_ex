import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {

    return (
    <View style={styles.container}>
      <View style={styles.one}>
        <View style={{flexDirection:'row'}}>
         <FontAwesome style={{fontSize:15, marginLeft:20,marginTop:67}} name="chevron-left" size={24} color="black" />
         <View>
          <TextInput placeholder={'어떤 것을 찾고 계신가요?'} style={styles.input} autoFocus></TextInput>
         </View>



      </View>

      </View>
      <View style={{flex:0.0015,backgroundColor:'#E6E6E6'}}></View>
      <View style={styles.two}>
        <Text></Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  one:{
    flex:0.15,
    backgroundColor:'white'
  },
  two:{
    flex:1,
    backgroundColor:'white'
  },
  input:{
    backgroundColor:'white',
    marginTop:53,
    marginLeft:0,
    width:300,
    fontSize:18,
    paddingVertical:10,
    paddingHorizontal:15
  },
});
