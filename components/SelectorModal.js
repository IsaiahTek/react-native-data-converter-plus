import React from "react"
import {View, Text, Modal} from "react-native"
import styles from "../styles"
const SelectorModal = (props)=>{
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
export default SelectorModal