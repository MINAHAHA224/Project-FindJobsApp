import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { checkImageURL } from '../../../utils'
import { icons } from '../../../constants'

const Company = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image

          style={styles.logoImage}
          source={{
            uri: data[0].employer_logo
            // checkImageURL(data[0].employer_logo) ?
            //   data.employer_logo :
            //   "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}> {data[0].job_title}</Text>
      </View>
      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>
          {data[0].employer_name} /
        </Text>
        <View style={styles.locationBox}>
          <Image
            style={styles.locationImage}
            source={icons.location}
            resizeMode="cover"
          />
          <Text style={styles.locationName}>{data[0].job_country}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company