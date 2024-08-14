import { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props)

    this.state={
        numero:0,
        botao:'VAI',
        ultimo:null
    }
    //Variavel do timer do relogio
    this.timer=null
    this.vai=this.vai.bind(this)
    this.limpar=this.limpar.bind(this)
  }

  vai(){
    //Criando contagem
    if (this.timer != null) {
         
      //Vai parar o time
         clearTimeout(this.timer)
         this.timer=null
         this.setState({botao:'VAI'})

    }else{

      //Vai girar o time
    this.timer=setInterval(()=>{
        this.setState({numero:this.state.numero + 0.1})
        //0.1+0.1
     },100)

     this.setState({botao:'PARAR'})

    }
   
  }

  limpar(){
      
    if (this.timer != null) {

      clearTimeout(this.timer)
      this.timer=null
    }

    this.setState({
       ultimo:this.state.numero,
       numero:0,
       botao:'VAI'
    })
  }


  render(){
  return (
    <View style={st.container}>

       <Image 
        source={require('./imagem/cronometro.png')}
        />

       <Text style={st.timer}>{this.state.numero.toFixed(1)}</Text>

       <View style={st.btnArea}>
          <TouchableOpacity style={st.btn} onPress={this.vai}>
            <Text style={st.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={st.btn} onPress={this.limpar}>
             <Text style={st.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
       </View>

       <View style={st.ultimo}>
         <Text style={st.txtUltimo}>
            {
            this.state.ultimo > 0 ? ' Ultimo tempo ' + this.state.ultimo.toFixed(2) + ' s ' : ''
            }
          </Text>
       </View>
    </View>
  );
 }
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00aeef'
  },

  timer:{
    marginTop:-175,
    color:'#FFF',
    fontSize:65,
    fontWeight:'bold'
  },

  btnArea:{
     flexDirection:'row',
     marginTop:70,
     height:40
  },

  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF',
    height:40,
    margin:17,
    borderRadius:9,
  },

  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  },

  ultimo:{
    marginTop:40,
  },

  txtUltimo:{
    fontSize:25,
    fontStyle:'italic',
    color:'#FFF'
  }

});
