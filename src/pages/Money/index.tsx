import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../components/Header";

const styles = StyleSheet.create({
	container: {},
	content: {
		paddingBottom: 68,
	},
});

const Money: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
			</ScrollView>
		</View>
	);
};

export default Money;
