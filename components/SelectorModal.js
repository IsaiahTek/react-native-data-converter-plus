import React from "react"
import {View, Text, Modal, ScrollView} from "react-native"
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions"
import styles from "../styles"
const SelectorModal = (props)=>{
    const windowHeight = useWindowDimensions();
    const showModal = props.modalState
    const setModalVisibility = props.setModalVisibility
    const title = props.title?props.title:"Select"
    return(
        <Modal
        animationType="none"
        visible={showModal}
        transparent={true}
        onRequestClose={()=>{alert(windowHeight + " Seeing windowHeight");setModalVisibility(!showModal)}}
        >
            <View>
                <View style={[styles.modalHeader, {backgroundColor:"#D7A1F955"}]}>
                    <Text style={{color:"purple", fontSize:18}}>{title}</Text>
                </View>
                <View style={{
              overflow: "hidden",
              flex: 1,
              borderTopStartRadius: 40,
              borderTopEndRadius: 40,
              flexGrow: windowHeight,
            }}>
                    <ScrollView contentContainerStyle={{
                flexGrow: windowHeight,
                backgroundColor: Colors.primary_color,
                padding: 10,
              }}>
                        {props.children}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
export default SelectorModal