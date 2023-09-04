import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

interface SkillCardProps extends TouchableOpacityProps{
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity
    activeOpacity={0.5} 
    {...rest}
    className=" bg-zinc-800 p-5 rounded-3xl items-center mt-[10px] mb-[10px]"
    >
    <Text className=" text-white bg-zinc-800 text-lg font-bold  ">
      {skill}
    </Text>
    </TouchableOpacity>
  )
}