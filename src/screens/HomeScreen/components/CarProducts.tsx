import React, { useState } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import { ModalProduct } from './ModalProducts';


interface Props {
    product: Product;
    handleChangeStock: (id: number, quantity: number)=> void;
  
  
  }


  export const CarProducts = ({ product, handleChangeStock }: Props) => {
    
    const [showModalProduct, setshowModalProduct] = useState<boolean>(false)

    return (

        <View>

        <View style={styles.productContainer}>
                   <View style={styles.comprarIcon}>
       
                       <Icon name='add-shopping-cart' size={30} color="white" onPress={() => setshowModalProduct(!showModalProduct)} 
                       />
       
                   </View>
                   <Image source={{ uri: product.pathImage }} style={styles.productImage} />
                   <View >
       
                       <Text style={styles.productMarca}>{product.marca}</Text>
                       <Text style={styles.productName}>{product.name}</Text>
                       <Text style={styles.productCodigo}>Codigo: {product.codigoReloj}</Text>
                       <Text style={styles.productPrecio}>${product.price}</Text>
       
                   </View>
               </View>
<ModalProduct  product={product} isVisible={showModalProduct} setShowModalProduct={() => setshowModalProduct(!setshowModalProduct)} handleChangeStock={handleChangeStock} />

      </View>

  

  )
}