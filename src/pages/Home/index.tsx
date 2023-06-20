import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import FeaturesTab from "../../components/FeaturesTab";
import MyCards from "../../components/MyCards";
import News from "../../components/News";
import CreditCard from "../../components/CreditCard";
import Loan from "../../components/Loan";

export default function Home() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header user="David" />
				<Balance balance={800.25} />
				<FeaturesTab />
				<MyCards />
				<News />
				<CreditCard bill={640.25} />
				<Loan loanValue={25000.0} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
