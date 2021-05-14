import React from 'react';

export default function GetCategories() {
  const [categories, setCategories] = React.useState([
    {id: 1, nombre: 'Categoría 1', url: 'url', isActive: true},
    {id: 2, nombre: 'Categoría 2', url: 'url', isAactive: true},
    {id: 3, nombre: 'Categoría 3', url: 'url', isAactive: true},
    {id: 4, nombre: 'Categoría 4', url: 'url', isAactive: true},
    {id: 5, nombre: 'Categoría 5', url: 'url', isAactive: true},
    {id: 6, nombre: 'Categoría 6', url: 'url', isAactive: true},
    {id: 7, nombre: 'Categoría 7', url: 'url', isAactive: true},
    {id: 8, nombre: 'Categoría 8', url: 'url', isAactive: true},
  ]);
  return [categories];
}
