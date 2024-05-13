import React from "react";
import { View, Text, Button } from "react-native";

import { useState } from "react";

const index = () => {
    const [value, setValue] = useState(1);


    return (
    <View>
        <Text>Hello Ryan</Text>
        <Button title="increment" onPress={()=> {
            let val = value + 1;
            setValue(val);
        }}></Button>
        <Text>The Value is {value}</Text>
        <Button title="decrement" onPress={()=> {
            let val = value - 1;
            setValue(val);
        }}></Button>
    </View>
    );
};

export default index;