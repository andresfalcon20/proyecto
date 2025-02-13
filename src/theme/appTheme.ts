import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "./commons/constants";


export const styles = StyleSheet.create({
    body: {
        color: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,
        paddingTop: 40
    },
    tittle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    }, 
    tittlePrincipal:{
        fontSize: 17,
        fontWeight: 'bold',
        color: SECUNDARY_COLOR,
        textAlign: 'center'
    },
    textDescription: {
        fontSize: 17,
        color: SECUNDARY_COLOR,
        marginTop: 7,
        textAlign: 'center'
    },
    inputText:{
        backgroundColor: INPUT_COLOR,
        width: '95%',
        borderRadius: 10,
        marginVertical: 7,
    },
    containerForm:{
        marginVertical: 20
    },
    buttonForm:{
        backgroundColor: SECUNDARY_COLOR,
        paddingVertical: 15,
        borderRadius: 50,
    },
    buttonText: {
        color: PRIMARY_COLOR,
        textAlign: 'center',
        fontSize: 14
    },
    IconPassword:{
        position: 'absolute',
        right:25,
        top:70,
        bottom: 17
    },
    IconPassword1:{
        position: 'absolute',
        right:25,
        top:233,
        bottom: 17
    },
    IconPassword2:{
        position: 'absolute',
        right:25,
        top:285,
        bottom: 17
    },
    textRedirect:{
        color: SECUNDARY_COLOR,
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    containerLogo: {
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: "black"
    },
    input: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "black",
        backgroundColor: '#f0f0f0',
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    logo: {
        width: 150,
        height: 150,
        right: -140,
        marginBottom: 10,
        borderRadius: 50
    },
    logo1: {
        width: 100,
        height: 100,
        right: -160,
        borderRadius: 100
    },
    columnWrapper: { 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around', 
        paddingHorizontal: 3, 
        marginBottom: 8,       
    },
    productContainer: {
        flex: 1, 
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 30,
        elevation: 3, 
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginHorizontal: 3,
        
         

    },
    productImage: {
        width: '100%', 
        height: 150, 
        resizeMode: 'cover', 
        marginBottom: 10,
        backgroundColor: 'transparent',
        borderRadius: 20
        
        
    },
  
    productMarca: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    productName: {
        fontSize: 14,

    }
})