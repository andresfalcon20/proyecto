import React from 'react';
import { FlatList, StatusBar, Text, View, Image, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../theme/commons/constants';
import { TittleComponents } from '../../components/TittleComponents';
import { BodyComponents } from '../../components/BodyComponents';
import { styles } from '../../theme/appTheme';

export interface Product {
    id: number;
    marca: string;
    name: string;
    codigoReloj: string | number;
    price: number;
    stock: number;
    pathImage: string;
}

export const HomeScreen = () => {
    const productos: Product[] = [
        { id: 1, marca: "TUDOR", name: "PELAGOS FXD CHRONO", codigoReloj: "SKU: M25807KN-0001", price: 3.71, stock: 7, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/08/m25807kn-0001_upright-tr-std-1.png" },
        { id: 2, marca: "TUDOR", name: "ROYAL", codigoReloj: "SKU: M28603-0005", price: 150, stock: 7, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/02/m28603-0005_upright-tr-std.png" },
        { id: 3, marca: "GUCCI Timepieces", name: "Gucci Dive", codigoReloj: "EAN: YA136222", price: 140, stock: 8, pathImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfEwhmjueXrwApePhlI-_7DR5AlXB6-cCEw&s" },
        { id: 4, marca: "CURREN", name: "RELOJ CURREN 8402- MOVIMIENTO DE CUARZO", codigoReloj: "SKU: CUR-89", price: 55, stock: 5, pathImage: "https://pulso.ec/cdn/shop/products/RXWN3704.jpg?v=1660340646" },
        { id: 5, marca: "HANNAH MARTIN", name: "RELOJ HANNAH MARTIN ELEGANTE NEGRO MATE", codigoReloj: "SKU: HAN-28", price: 39, stock: 12, pathImage: "https://jcrelojes.com/cdn/shop/files/IMG_2243.jpg?v=1724401641&width=1445" },
        { id: 6, marca: "TUDOR", name: "Black Bay Fifty-eight", codigoReloj: "EAN: M7939G1A0NRU-0001", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/05/m7939g1a0nru-0001_5.png" },
        { id: 7, marca: "TUDOR", name: "1926", codigoReloj: "SKU: M91450-0001", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/02/m91450-0001_upright-tr-std.png" },
        { id: 8, marca: "TUDOR", name: "BLACK BAY GMT S&G", codigoReloj: "SKU: M79833MN-0001", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/02/m79833mn-0001_upright-tr-std.png" },
        { id: 9, marca: "ROLEX", name: " Perpetual 1908", codigoReloj: "", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/06/rolex-perpetual-1908-m52506-0002_2312jva_001-landscape-min-scaled-1-2048x598.jpg" },
        { id: 10, marca: "ROLEX", name: "Yacht-Master", codigoReloj: "", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/06/rolex-yacht-master-cover-M226627-0001_2301jva_001-landscape-min-scaled-1-2048x598.jpg" },
        { id: 11, marca: "ROLEX", name: "Rolex Cosmograph Daytona", codigoReloj: "", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/06/rolex-cosmograph-daytona-cover-m126506-0001_2301jva_002-landscape-min-scaled-1-2048x598.jpg" },
        { id: 12, marca: "ROLEX", name: "Submariner", codigoReloj: "", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/06/rolex-submariner-cover-m124060-0001-0002_2210jva_001-landscape-min-scaled-1-2048x598.jpg" },
        { id: 13, marca: "ROLEX", name: "Sea-Dweller", codigoReloj: "", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/06/rolex-seadweller-cover-m124060-0001-0002_2210jva_001-landscape-min-scaled-1-2048x598.jpg" },
        { id: 14, marca: "ROLEX", name: "Air-King", codigoReloj: "EAN: M7939G1A0NRU-0001", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/07/rolex-collection_banner-air-king-m126900-0001_2210jva_001-min-2048x683.jpg" },
        { id: 15, marca: "ROLEX", name: "GMT-Master II", codigoReloj: "EAN: M7939G1A0NRU-0001", price: 390, stock: 8, pathImage: "https://bauer.com.ec/wp-content/uploads/2024/06/rolex-gmt-master-II-cover-m126710GRNR-0003_2312jva_001-landscape-min-scaled-1-2048x598.jpg" },

    ];

    const renderProduct = ({ item }: { item: Product }) => (
        <View style={styles.productContainer}> {/* Contenedor para cada producto */}
            <Image source={{ uri: item.pathImage }} style={styles.productImage} />
            <View >
                <Text style={styles.productMarca}>{item.marca}</Text>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productName}>{item.codigoReloj}</Text>
                <Text style={styles.productName}>Price: ${item.price}</Text>
                <Text style={styles.productName}>Stock: {item.stock}</Text>
            </View>
        </View>
    );

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TittleComponents title='RELOJES' />
            <FlatList
                data={productos}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2} 
                columnWrapperStyle={styles.columnWrapper}
            />

        </View>
    );
};


