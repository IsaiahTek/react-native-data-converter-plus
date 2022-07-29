import React, {useState} from "react"
import {View, TouchableHighlight, TextInput, Text, Modal} from "react-native"
import styles from "../styles"

export const CustomSelectButton = (props)=>{
    const handleSelectValueUpdate = props.handleSelectValueUpdate
    const [unitsListModalVisibility, setUnitsListModalVisibility] = useState(false)
    return(
        <>
            <TouchableHighlight activeOpacity={0.4} underlayColor="#51067EDD" style={{backgroundColor:"#51067E", paddingVertical:22, borderBottomRightRadius:90, borderTopRightRadius:90, elevation:10}} onPress={()=>{setUnitsListModalVisibility(true)}}>
                {props.children}
            </TouchableHighlight>
            <SelectorModal modalState={unitsListModalVisibility} setModalVisibility={setUnitsListModalVisibility}>
                <SelectableList arrayList={props.arrayList} action={handleSelectValueUpdate} closeModalHandler={setUnitsListModalVisibility} />
            </SelectorModal>
        </>
    )
}

export const InputField = (props)=>{
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

export const SelectableList = (props)=>{
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

export const SelectorModal = (props)=>{
    const showModal = props.modalState
    const setModalVisibility = props.setModalVisibility
    const title = props.title?props.title:"Select"
    return(
        <Modal
        animationType="fade"
        visible={showModal}
        transparent={true}
        onRequestClose={()=>{setModalVisibility(!showModal)}}
        >
            <View style={styles.modalStyle}>
                <View style={[styles.modalHeader, {backgroundColor:"#D7A1F955"}]}>
                    <Text style={{color:"purple", fontSize:18}}>{title}</Text>
                </View>
                <View>
                    {props.children}
                </View>
            </View>
        </Modal>
    )
}