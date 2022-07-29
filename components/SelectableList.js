import React from "react"
import {TouchableHighlight, Text} from "react-native"
const SelectableList = (props)=>{
    let action = props.action
    let closeModalHandler = props.closeModalHandler
    return props.arrayList.map((name)=>
        <TouchableHighlight activeOpacity={0.2} underlayColor="#D7A1F955" key={name} style={{marginVertical:5, paddingVertical:10, paddingLeft:20}} onPress={()=>{
            action(name)
            closeModalHandler(false)
        }}>
            <Text style={{color:"purple", fontSize:18}}>{name.__toSentenceCase()}</Text>
        </TouchableHighlight>
    )
}
export default SelectableList