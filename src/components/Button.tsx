import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { Component } from 'react'

interface ButtonProps extends TouchableOpacityProps{
  title: string;
}
 

export function Button ({title,...rest} : ButtonProps){
    return (
      <TouchableOpacity 
      activeOpacity={0.5} 
      {...rest}
      className="bg-purple-500 p-4 rounded-md mt-5 items-center">
        <Text className="text-white font-bold text-base">{title}</Text>
      </TouchableOpacity>
    )
}