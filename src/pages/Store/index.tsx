import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";

const styles = StyleSheet.create({
	container: {},
});

const Store: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
			</ScrollView>
		</View>
	);
};

export default Store;
