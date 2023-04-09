import './App.css';

import React from "react";
import axios from "axios";
import Header from './Header';
import Tache from './Tache';
import Footer from './Footer'

class App extends React.Component{
  constructor(props){
    super(props);
    const axios = require('axios');
    axios.get('https://raw.githubusercontent.com/Lucas-Rodrigues2/TodoListReactNative/8f900427591602e9054af44eb46e9b94f104a23c/storage.json')
    .then(function (response) {
      this.state = {
        taches : JSON.parse(response.data)
      };
    })
    .catch(function (error) {
      console.log(error);
      this.state = {
        taches : [{"title":"Idée","isChecked":true},{"title":"Marché","isChecked":true},{"title":"Wireframe","isChecked":true},{"title":"Design","isChecked":true},{"title":"Landingpage","isChecked":true},{"title":"Développement","isChecked":false},{"title":"Publish","isChecked":false},{"title":"Pub","isChecked":false},{"title":"Feedback","isChecked":false}]
      };
    });
  }

  afficheTaches(){
    return this.state.taches.map((element , index) => <Tache key={index} texte={(index + 1) + "." + element.title} checked={element.isChecked} check={() => this.checkTache(index)} delete={() => this.deleteTache(index)} deplacementBas={() => this.deplacementBasTache(index)} deplacementHaut={() => this.deplacementHautTache(index)}/>);
  }

  setNumberOfChecked(){
    let nbTachesChecked = 0;
    this.state.taches.forEach(element => {
          if(element.isChecked) ++nbTachesChecked;
    });
    return nbTachesChecked
  }

  checkTache(i){
    let newTaches = this.state.taches.slice();
    newTaches[i].isChecked = !(newTaches[i].isChecked);
    this.setState({taches: newTaches});
  }

  deleteTache(i){
    let newTaches = this.state.taches.slice();
    newTaches.splice(i,1);
    this.setState({taches: newTaches});
  }

  ajouterTache(){
    let newTaches = this.state.taches.slice();
    newTaches.push({title: prompt(), isChecked: false});
    this.setState({taches: newTaches});
  }

  deplacementBasTache(i){
    if(i < this.state.taches.length-1){
      let newTaches = this.state.taches.slice();
      let tmp = newTaches[i];
      newTaches[i] = newTaches[i+1];
      newTaches[i+1] = tmp;
      this.setState({taches: newTaches});
    }
  }

  deplacementHautTache(i){
    if(i > 0){
      let newTaches = this.state.taches.slice();
      let tmp = newTaches[i];
      newTaches[i] = newTaches[i-1];
      newTaches[i-1] = tmp;
      this.setState({taches: newTaches});
      
    };
  }

  sauvegarder(){
    //on n'a pas trouvé de solution pour sauvegarder avec axios
  }

  rechercher(){
    let newTaches = [];
    let recherche = document.getElementById("rechercher").value.toLowerCase();

    if(recherche.length >= 3){
      this.state.taches.forEach(element => {
        if(element.title.toLowerCase().includes(recherche)){
          newTaches.push(element);
        }
      });
      this.setState({taches: newTaches})
    }
    else{
      this.setState({taches : JSON.parse(localStorage.getItem("tasks"))});
    }
  }

  render(){
    return(
      <View>
        <Header nbTachesChecked={this.setNumberOfChecked()} nbTaches={this.state.taches.length} />
        <ScrollView>{this.afficheTaches()}</ScrollView>
        <Footer ajouter={() => this.ajouterTache()} rechercher={() => this.rechercher()} sauvegarder={() => this.sauvegarder()}/>
      </View>
    );
  }
}

export default App;
