import React from "react";

class Footer extends React.Component{
    render() {   
       return (
        <View>
            <TextInput 
            style={styles.input} 
            onChangeText={this.props.rechercher}
            />
            <Button 
            title="ajouter" 
            onPress={this.props.ajouter} 
            />
            <Button 
            title="sauvegarder" 
            onPress={this.props.sauvegarder} 
            />
        </View>
       );
    }
}

export default Footer