import React from "react";

class Tache extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <CheckBox 
                    value={this.props.checked} 
                    onValueChange={this.props.check}
                />
                <Text>{this.props.texte}</Text>
                <Button 
                    title="supprimer" 
                    onPress={this.props.delete} 
                />
                <Button 
                    title="↑" 
                    onPress={this.props.deplacementHaut} 
                />
                <Button 
                    title="↓" 
                    onPress={this.props.deplacementBas} 
                />
            </View>
        );
    }
}

export default Tache;