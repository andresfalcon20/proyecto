import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR, TERTIARY_COLOR } from "./commons/constants";

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
        marginVertical: 20,
        alignItems: "center",

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
        backgroundColor: '#40434e',
        padding: 15,
        borderRadius: 30,
        elevation: 3, 
        shadowOpacity: 0.5,
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
        color: "white",
        textAlign: "center" 
   },
   productName: {
        fontSize: 14,
        textAlign: "center", 
        fontStyle: "italic",
        color: "white",
    },
    productCodigo: {
        fontSize: 14,
        textAlign: "center", 
        color: "white", 
    },
    containerIcon: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        paddingHorizontal: 10, 
        

        },
    containerRelojes:{
        flex: 1, 
        alignItems: 'center'
    },


    containerCancel:{
        flex: 1, 
        alignItems: 'flex-end',
        textAlign: "center",
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 17,
        color: TERTIARY_COLOR,
    },

    



    comprarIcon:{
        alignItems: "flex-end",
        paddingBottom: 10,
        flex: 1,
        justifyContent: "center",
        backgroundColor: "rgb(0,0,0,0.5)",
    },
    productPrecio:{
        color:  "#4dff00",
        textAlign: "center"
    },





 modalProduct: {
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 47,
        elevation: 5
    },

    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(0,0,0,0.5)",
    },

    headerModal: {
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        borderStyle: "solid",
        padding: 8,
        alignItems: 'center', 
    },


    imageModal: {
        width: 180,
        height: 180
    },
    containerQuantity: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerTableCar: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textHeaderTable: {
        fontWeight: "bold",
        color: SECUNDARY_COLOR
    },

    containerTotal:{
        alignItems: "flex-end",
        marginTop: 15
    },
    buttonAddCartText: {
        color: SECUNDARY_COLOR,
        fontWeight: "bold"
    },
    buttonAddCart: {
        backgroundColor: PRIMARY_COLOR,
        marginTop: 15,
        alignItems: "center",
        paddingVertical: 10,
        borderRadius: 10,

    },
    buttonQuantity: {
        backgroundColor: PRIMARY_COLOR,
        height: 50,
        width: 40,
        borderRadius: 10,
        margin: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonQuantityText: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: "bold"
    },

    textQuantity: {
        fontSize: 15,
        color: TERTIARY_COLOR,
        textAlign: "center",
        fontWeight: "bold"
    },



   
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 15,
        borderRadius: 10,
    },
    
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
  
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    payButton: {
        backgroundColor: PRIMARY_COLOR,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    payButtonText: {
        color: 'white',
        fontSize: 18,
        marginRight: 10,
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
    },
    closeButtonText: {
        fontSize: 16,
        color: 'red',
    },

    containerModalProducts: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalProductsCarrito: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        borderBottomColor: "#ccc",
        borderStyle: "solid",
        
    },
    titleModalProduct: {
        fontSize: 20,
        fontWeight: "bold",
        color: TERTIARY_COLOR,
        padding: 7,
        marginBlockEnd: 5,
        
    },
    containerCarrito: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        marginBlockStart: 5
    },
    imageCarrito: {
        width: 100,
        height: 100,
        marginRight: 15,
        borderRadius: 10,
    },
    productDetailsCarrito: {
        flex: 1,
    },
    productNameC: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: "italic",
        paddingBlockEnd: 10,
        
    },
    quantityContainerC: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonQuantityC: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 25,
        borderWidth: 2, 
        borderColor: PRIMARY_COLOR,
        backgroundColor: 'transparent', 
    

    },
    buttonCarrito: {
        fontSize: 18,
        color: 'black',
    },
    textQuantityCarrito: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    priceCarrito: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "green",
        
    },
 



    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        backgroundColor: '#f0f0f0', 
    },
    
    tableHeaderText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: TERTIARY_COLOR,
    },
    
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    
    tableCell: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
    },


});