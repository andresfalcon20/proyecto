import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";
import { PRIMARY_COLOR } from '../../../theme/commons/constants';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';

interface Props {
    product: Product;
    isVisible: boolean;
    setShowModalProduct: () => void;
    handleChangeStock: (id: number, quantity: number) => void;
}

export const ModalProduct = ({ product, isVisible, setShowModalProduct, handleChangeStock }: Props) => {
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState<number>(1);

    const closeModal = (): void => {
        setShowModalProduct();
        setQuantity(1);
    }

    const handleAddProduct = (): void => {
        handleChangeStock(product.id, quantity);
        closeModal();
    }

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModalProducts}>
                <View style={{ ...styles.modalProductsCarrito, width: width * 0.80 }}>
                    
                <View style={styles.headerModal}>
                        <Text style={styles.titleModalProduct}>
                            AGREGAR AL CARRITO
                        </Text>
                        <View style={styles.containerIcon}>
                            <Icon style= {{paddingBottom: 10, paddingLeft: 20 }}
                                name='cancel'
                                size={25}
                                color={PRIMARY_COLOR}
                                onPress={closeModal} />
                        </View>
                    </View>
                    
                    

                    <View style={styles.containerCarrito}>
                        <Image source={{ uri: product.pathImage }} style={styles.imageCarrito} />
                        <View style={styles.productDetailsCarrito}>
                            <Text style={styles.productNameC}>{product.name}</Text>
                            <View style={styles.quantityContainerC}>
                                <TouchableOpacity
                                    style={styles.buttonQuantityC}
                                    onPress={() => setQuantity(quantity - 1)}
                                    disabled={quantity === 1}
                                >
                                    <Text style={styles.buttonCarrito}>-</Text>
                                </TouchableOpacity>

                                <Text style={styles.textQuantityCarrito}>{quantity}</Text>

                                <TouchableOpacity
                                    style={styles.buttonQuantityC}
                                    onPress={() => setQuantity(quantity + 1)}
                                    disabled={quantity === product.stock}
                                >
                                    <Text style={styles.buttonCarrito}>+</Text>
                                </TouchableOpacity>
                            </View>
                            

                        </View>
                        
                    </View>
<View style={{ alignItems: 'center' }}>
                                <Text style={styles.priceCarrito}>
                                    Total: $ {(product.price * quantity).toFixed(2)}
                                </Text>
                            </View>
                    <TouchableOpacity style={styles.payButton} onPress={handleAddProduct}>
                        <Text style={styles.payButtonText}>Agregar</Text>
                        <Icon name="add-shopping-cart" size={20} color="white" />
                    </TouchableOpacity>


                </View>
            </View>
        </Modal>
    );
}

