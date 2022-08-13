import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
    appBarStyle:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#51067E",
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:-40
    },
    verticalCenteredView:{
        display:"flex",
        height:"100%",
        justifyContent:"center",
        paddingHorizontal:1
    },
    modalStyle:{
        margin:40,
        overflow:"scroll",
        borderRadius: 20,
        backgroundColor:"white",
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalHeader:{
        padding:10,
        width:"100%",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        alignItems:"center"
    },
    modalBody:{
        height:"49%",
        // overflow:"scroll",
        flex:1
    },
    marginBottom:{
        marginBottom:40
    },
    marginTop:{
        marginTop:40
    },
    inputTextStyle:{
        borderTopLeftRadius:60,
        borderBottomLeftRadius:60,
        fontSize:18, padding:20,
        textAlign:"center",
        elevation:10,
        shadowOffset: {width: 4,height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4
    }
})

export default styles