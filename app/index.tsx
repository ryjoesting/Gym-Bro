import { View, Button, Text} from "react-native-ui-lib"
import { Link } from "expo-router"

// Main landing for app launch
// Will need to check auth here, then skip to main application
// Adding this for now, needs TODO later on

export default () => {
    return (
        <View flex style={{justifyContent: 'center',
                            alignItems: 'center'}}>
            <Link asChild href={'/(tabs)/home'}>
                <Button><Text white>Login</Text></Button>
            </Link>
        </View>
    )
}