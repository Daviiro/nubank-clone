import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Props } from "./types";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
	container: {
		display: "flex",
	},
	content: {
		margin: 20,
	},
	upperContent: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	downContent: {
		marginLeft: 8,
	},
	creditCardText: {
		fontWeight: "600",
		fontSize: 24,
	},
	billText: {
		color: "#9c9fa8",
		fontWeight: "600",
		fontSize: 16,
		marginTop: 8,
		marginBottom: 8,
	},
});

const CreditCard: React.FC<Props> = ({ bill }) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					borderTopColor: "#f5f5f5",
					borderTopWidth: StyleSheet.hairlineWidth,
				}}
			/>
			<TouchableOpacity>
				<View style={styles.content}>
					<View style={styles.upperContent}>
						<Text style={styles.creditCardText}>
							Cartão de crédito
						</Text>
						<Feather name="chevron-right" size={24} color="black" />
					</View>
					<View style={styles.downContent}>
						<Text style={styles.billText}>Fatura atual</Text>
						<Text style={styles.creditCardText}>
							R$ {bill ? String(bill).replace(".", ",") : "0,00"}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
			<View
				style={{
					borderBottomColor: "#f5f5f5",
					borderBottomWidth: StyleSheet.hairlineWidth,
				}}
			/>
		</View>
	);
};

export default CreditCard;
