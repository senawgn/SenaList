import { Image, ScrollView, StatusBar, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import HeaderCustom from "./src/components/HeaderCustom";


const App = () => {
	return (
		<View style={{backgroundColor:"#020312" , flex:1}}>
			<StatusBar backgroundColor={'#020312'} barStyle={'light-content'} />
			
			<HeaderCustom  title="Pengaturan"/>
			

			<ScrollView>
				<View >
					<TouchableOpacity style={style.container}>
					<Image style={{height: 50, width: 50, borderRadius: 50, margin: 10}} source={require('./src/assets/senabromo.png')}/>
					<Text style={style.username} >Sena</Text>
					<Image style={{height:20, width:20, marginRight:20}} source={require('./src/assets/qrcode-solid(1).png')}/>
					<Image style={{height:20, width:20}} source={require('./src/assets/plus-circle.png')}/>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/key.png')} />
						<Text style={style.teks}>Akun</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/lock.png')} />
						<Text style={style.teks}>Privasi</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/smile.png')} />
						<Text style={style.teks}>Avatar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/book.png')} />
						<Text style={style.teks}>Daftar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/message-square.png')} />
						<Text style={style.teks}>Chat</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/bell.png')} />
						<Text style={style.teks}>Notifikasi</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/database.png')} />
						<Text style={style.teks}>Penyimpanan dan Data</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/globe.png')} />
						<Text style={style.teks}>Bahasa Aplikasi</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/help-circle.png')} />
						<Text style={style.teks}>Bantuan</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/user-plus.png')} />
						<Text style={style.teks}>Undang Teman</Text>
					</TouchableOpacity>
					
					<Text style={{color:'gray', fontWeight:'bold', marginTop:20, paddingHorizontal:10,
        paddingVertical: 10}}>Juga dari Meta</Text>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/instagram.png')} />
						<Text style={style.teks}>Buka Instagram</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/facebook.png')} />
						<Text style={style.teks}>Buka Facebook</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/at-sign.png')} />
						<Text style={style.teks}>Buka Threads</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
						<Image style={style.menuicon} source={require('./src/assets/circle.png')} />
						<Text style={style.teks}>Buka aplikasi Meta AI</Text>
					</TouchableOpacity>

				</View>


				
			</ScrollView>
		</View>
	)
}


const style = StyleSheet.create({

	container: {
		flexDirection:'row',
		alignItems:'center',
		padding: 16,
		justifyContent:'space-between',
		borderBottomWidth: 0.2,
        borderBottomColor:"white",
		
	},

	username: {
		color: 'white',
		alignItems:'row',
		marginRight: 170,
		marginBottom: 20,
		fontSize: 16
	},

	menuicon: {
		flexDirection:'row',
		alignItems:'center',
		marginHorizontal:20,
		marginVertical: 20,
        justifyContent:"space-between",
		height:20,
		width:20
	}, 
	teks: {
		color: 'white',
		alignItems:'row',
		paddingRight: 10,
		marginBottom: 10,
		fontSize: 16
	}
})


export default App