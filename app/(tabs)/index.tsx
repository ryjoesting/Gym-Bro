import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, Card } from 'react-native-ui-lib';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import  WorkoutCard from '../../components/WorkoutCard'

const HomeTab = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <ScrollView style={{flex:1}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
          <Card enableShadow={true} width={'80%'} center flex onPress={() => console.log('pressed')} height={500}>
            <Text red50 center text20>hello</Text>
          </Card>
          <WorkoutCard></WorkoutCard>
          <Card center flex height={50} width={'80%'}>
            <Text red40 text60 center>Yo</Text>
          </Card>
        </ScrollView>
    </GestureHandlerRootView>
  )
}
export default HomeTab;