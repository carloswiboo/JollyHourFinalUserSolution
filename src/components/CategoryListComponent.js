import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryListComponent = () => {
  const [itemSelected, setItemSelected] = React.useState();
  const [categories, setCategories] = React.useState([
    {id: 1, nombre: 'Categoría 1', url: 'url'},
    {id: 2, nombre: 'Categoría 2', url: 'url'},
    {id: 3, nombre: 'Categoría 3', url: 'url'},
    {id: 4, nombre: 'Categoría 4', url: 'url'},
    {id: 5, nombre: 'Categoría 5', url: 'url'},
    {id: 6, nombre: 'Categoría 6', url: 'url'},
    {id: 7, nombre: 'Categoría 7', url: 'url'},
    {id: 8, nombre: 'Categoría 8', url: 'url'},
  ]);

  const onPressButtonArrived = item => {
    console.log(item);
    setItemSelected(item);
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.categoryButton,
          // eslint-disable-next-line react-native/no-inline-styles
          {backgroundColor: itemSelected === item.id ? '#7089E5' : '#9C187E'},
        ]}
        onPress={() => {
          onPressButtonArrived(item.id);
        }}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'white'}}>
            {item.nombre}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
          marginLeft: 20,
          marginTop: 0,
        }}>
        Categorías
      </Text>
      <FlatList
        style={styles.categoryListContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={renderItem}
      />
    </>
  );
};

export default CategoryListComponent;

const styles = StyleSheet.create({
  categoryButton: {
    marginLeft: 8,
    marginRight: 8,
    padding: 7,
    borderRadius: 20,
  },
  categoryListContainer: {
    paddingVertical: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
});
