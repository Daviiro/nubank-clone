import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
		marginRight: 10,
		width: 280,
	},
	storeName: {},
	discountText: {
		fontWeight: "500",
	},
});

interface Props {
	name: string;
	discount: string;
}

const CashbackCard: React.FC<Props> = ({ name, discount }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.storeName}>{name}</Text>
			<Text style={styles.discountText}>{discount}</Text>
		</View>
	);
};

export default CashbackCard;
