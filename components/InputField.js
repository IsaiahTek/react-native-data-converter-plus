import React, {useState} from "react"
import {View, TouchableHighlight, TextInput, Text} from "react-native"
import SelectorModal from "./SelectorModal"
import styles from "../styles"
const InputField = (props)=>{
    const input = props.input
    const inputUnit = props.inputUnit
    const convert = props.convert
    return  (
        <View style={{display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
            <View style={{flex:8}}>
                <TextInput 
                    keyboardType="decimal-pad"
                    placeholder="0"
                    style={styles.inputTextStyle} value={input.toString()} onChangeText={newVal => convert(newVal)}
                />
            </View>
            <View style={{flex:3}}>
                {props.children}
            </View>
        </View>
    )
}
export default InputField