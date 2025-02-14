import React from 'react'
import { FlatList, Modal, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Text, View } from 'react-native'
import { CarProducts } from './CarProducts';
import Icon from "react-native-vector-icons/MaterialIcons"
import { CardProduct } from '../HomeScreen';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';
import { styles } from '../../../theme/appTheme';

interface Props {
    isVisible: boolean;
    carProducts: CardProduct[];
    setShowModalCar: () => void;
}

export const ModalCar = ({ isVisible, carProducts, setShowModalCar }: Props) => {
    const { width } = useWindowDimensions();

    const totalPay = (): number => {
        let total: number = 0;
        carProducts.forEach(product => {
            total += product.total;
        });
        return total;
    };

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.containerModal}>
                <View style={{ ...styles.modalProduct, width: width * 0.80 }}>
                    <View style={styles.headerModal}>
                        <Text style={styles.containerCancel}>MIS RELOJES</Text>
                        <Icon name='cancel' size={25} color={PRIMARY_COLOR} onPress={setShowModalCar} />
                    </View>

                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Producto</Text>
                        <Text style={styles.tableHeaderText}>Precio</Text>
                        <Text style={styles.tableHeaderText}>Cantidad</Text>
                        <Text style={styles.tableHeaderText}>Total</Text>
                    </View>

                    <FlatList
                        data={carProducts}
                        renderItem={({ item }) => (
                            <View style={styles.tableRow}>
                                <Text style={styles.tableCell}>{item.name}</Text>
                                <Text style={styles.tableCell}>${item.price.toFixed(2)}</Text>
                                <Text style={styles.tableCell}>{item.quantity}</Text>
                                <Text style={styles.tableCell}>${item.total.toFixed(2)}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />

                    <View style={styles.containerTotal}>
                        <Text style={styles.textDescription}>
                            Total a pagar: ${totalPay().toFixed(2)}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.buttonAddCart}>
                        <Text style={styles.buttonAddCartText}>COMPRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
