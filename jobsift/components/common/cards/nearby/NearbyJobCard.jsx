import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'
import { useRouter } from 'expo-router'



const NearbyJobCard = (props) => {
  const { job, handleCardPress } = props;
  const router = useRouter();


  return (
    <TouchableOpacity style={styles.container}
      onPress={() => handleCardPress(job)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          style={styles.logImage}
          source={{
            uri: job.employer_logo
            // checkImageURL(job.employer_logo) ?
            //   job.employer_logo :
            // "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",

          }}
          resizeMode="contain"

        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1} >
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard