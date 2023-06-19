import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {},
});

const CreditCard: React.FC = () => {
	return (
		<View style={styles.container}>
			<View
				style={{
					borderTopColor: "#efefef",
					borderTopWidth: StyleSheet.hairlineWidth,
				}}
			/>
			<Text>Cartão de crédito</Text>
			<Text>Fatura atual</Text>
			<Text>R$680,40</Text>
			<View
				style={{
					borderBottomColor: "#efefef",
					borderBottomWidth: StyleSheet.hairlineWidth,
				}}
			/>
		</View>
	);
};

export default CreditCard;
