import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import TransactionCard from "./TransactionCard";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		marginTop: 24,
	},
	historyText: {
		fontSize: 20,
		fontWeight: "500",
		marginBottom: 24,
	},
});

const TransactionHistory: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.historyText}>Histórico</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
				<TransactionCard
					name="Transferência enviada"
					desc={`ShopeePay
PIX
R$ 24,99 `}
					icon="dollar-sign"
					date="06 JUN"
				/>
			</ScrollView>
		</View>
	);
};

export default TransactionHistory;
