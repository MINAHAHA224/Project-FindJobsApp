import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}> {name}</Text>
    </TouchableOpacity>);


}

const Tabs = (props) => {
  const { tabs, activeTab, setActiveTab } = props;

  // riêng chỗ này không sài funtion như này được vì phải setActiveTab() trước khi mà quang cái active vô thằng 
  //TabButton ==> ngay đoạn flatlist mình đã thực hiện trước cái funtion rồi  onHandleSearchType={() => setActiveTab(item)}
  // lúc mà truyền cái onHandleSearchType này vô tabButton thì nó đã setActiveTab(item) trước rồi => activeTab có dữ liệu
  // const onHandleSearchType = ({ item }) => {
  //   {
  //     setActiveTab(item)
  //   }
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  )
}

export default Tabs