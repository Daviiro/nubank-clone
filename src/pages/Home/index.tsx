import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import FeaturesTab from "../../components/FeaturesTab";
import MyCards from "../../components/MyCards";
import Tips from "../../components/Tips";
import CreditCard from "../../components/CreditCard";
import Loan from "../../components/Loan";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		paddingBottom: 68,
	},
});

export default function Home() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.content}>
					<Header user="David" />
					<Balance balanceValue={800.25} />
					<FeaturesTab />
					<MyCards />
					<Tips />
					<CreditCard bill={640.25} limit={1040.25} />
					<Loan loanValue={25000.0} />
				</View>
			</ScrollView>
		</View>
	);
}
