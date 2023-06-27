import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import Cashback from "../../components/Cashback";
import CashbackCard from "../../components/CashbackCard";

const styles = StyleSheet.create({
	container: {},
	row: {
		flexDirection: "row",
	},
});

const Store: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header />
				<Cashback name="Mais vendidos">
					<View style={styles.row}>
						<CashbackCard
							name="AliExpress"
							discount="4% de cashback"
						/>
						<CashbackCard name="Shopee" discount="2% de cashback" />
						<CashbackCard
							name="Centauro"
							discount="5% de cashback"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="Zattini"
							discount="4% de cashback"
						/>
						<CashbackCard
							name="Netshoes"
							discount="5% de cashback + cupom"
						/>
						<CashbackCard name="Nike" discount="6% de cashback" />
					</View>
				</Cashback>
				<Cashback name="Celulares">
					<View style={styles.row}>
						<CashbackCard
							name="Trocafone"
							discount="2,5% de cashback"
						/>
						<CashbackCard
							name="Xiaomi"
							discount="10% de desconto"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="Celular Seguro"
							discount="Simule Agora"
						/>
						<CashbackCard
							name="Magazine Luiza"
							discount="Até 50% de desconto"
						/>
					</View>
				</Cashback>
				<Cashback name="Gift Cards">
					<View style={styles.row}>
						<CashbackCard
							name="iFood"
							discount="3,5% de desconto no gift card"
						/>
						<CashbackCard
							name="Google Play"
							discount="3,5% de desconto no gift card"
						/>
					</View>
				</Cashback>
				<Cashback name="Eletroportáteis">
					<View style={styles.row}>
						<CashbackCard
							name="Electrolux"
							discount="1% de cashback"
						/>
						<CashbackCard
							name="Magazine Luiza"
							discount="Até 50% de desconto"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="Carrefour"
							discount="3% de cashback"
						/>
						<CashbackCard
							name="Casas Bahia"
							discount="1,5% de cashback"
						/>
					</View>
				</Cashback>
				<Cashback name="Para ficar na moda">
					<View style={styles.row}>
						<CashbackCard
							name="Centauro"
							discount="5% de cashback"
						/>
						<CashbackCard
							name="Okulos"
							discount="1,5% de cashback"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="Zattini"
							discount="4% de cashback"
						/>
						<CashbackCard
							name="Netshoes"
							discount="5% de cashback + cupom"
						/>
					</View>
				</Cashback>
				<Cashback name="Eletrodomésticos">
					<View style={styles.row}>
						<CashbackCard
							name="Electrolux"
							discount="1% de cashback"
						/>
						<CashbackCard
							name="Magazine Luiza"
							discount="Até 50% de desconto"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="Carrefour"
							discount="3% de cashback"
						/>
						<CashbackCard
							name="Casas Bahia"
							discount="1,5% de cashback"
						/>
					</View>
				</Cashback>
				<Cashback name="Beleza e perfumaria">
					<View style={styles.row}>
						<CashbackCard
							name="Quem Disse, Berenice?"
							discount="7% de cashback"
						/>
						<CashbackCard
							name="Forever Liss"
							discount="8,5% de cashback (era 3,5%)"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="O Boticário"
							discount="5% de cashback"
						/>
						<CashbackCard
							name="Sephora"
							discount="6% de cashback"
						/>
					</View>
				</Cashback>
				<Cashback name="Games">
					<View style={styles.row}>
						<CashbackCard
							name="Playstation"
							discount="6% de desconto"
						/>
						<CashbackCard
							name="Positivo"
							discount="110% de cashback"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard name="Xbox" discount="8% de desconto" />
						<CashbackCard
							name="Nintendo"
							discount="-99% de desconto"
						/>
					</View>
				</Cashback>
				<Cashback name="Viagem e Lazer">
					<View style={styles.row}>
						<CashbackCard
							name="123 Milhas"
							discount="2,5% de cashback"
						/>
						<CashbackCard
							name="Seguro Viagem"
							discount="Simule Agora"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="Transferência Internacional"
							discount="15% de desconto"
						/>
						<CashbackCard
							name="Buser"
							discount="5,5% de cashback"
						/>
					</View>
				</Cashback>
				<Cashback name="Móveis e construção">
					<View style={styles.row}>
						<CashbackCard
							name="Aliexpress"
							discount="4% de cashback"
						/>
						<CashbackCard
							name="Telhanorte"
							discount="4,5% de cashback"
						/>
					</View>
					<View style={styles.row}>
						<CashbackCard
							name="Mobly"
							discount="1,5% de cashback"
						/>
						<CashbackCard
							name="Tok&Stok"
							discount="2% de cashback"
						/>
					</View>
				</Cashback>
			</ScrollView>
		</View>
	);
};

export default Store;
