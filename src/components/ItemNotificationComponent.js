import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';

export default function ItemNotificationComponent(props) {
  return (
    <>
      {props.notificationsList.map((l, i) => (
        <ListItem
          key={i}
          Component={TouchableScale}
          friction={90} //
          tension={100} // These props are passed to the parent component (here TouchableScale)
          activeScale={0.95} //
          linearGradientProps={{
            colors: ['black', 'black'],
            start: {x: 1, y: 0},
            end: {x: 0.2, y: 0},
          }}
          ViewComponent={LinearGradient} // Only if no expo
        >
          <ListItem.Content>
            <ListItem.Title style={{color: 'white', fontWeight: 'bold'}}>
              {l.text}
            </ListItem.Title>
            <ListItem.Subtitle style={{color: 'white'}}>
              {l.fecha}
            </ListItem.Subtitle>
          </ListItem.Content>
          {/*<ListItem.Chevron color="white" />*/}
        </ListItem>
      ))}
    </>
  );
}

const styles = StyleSheet.create({});
