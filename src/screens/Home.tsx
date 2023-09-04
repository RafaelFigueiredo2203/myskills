
import { useEffect, useState } from 'react';
import {  FlatList, ScrollView, Text, TextInput, View } from 'react-native';
import { Button } from '../components/Button';
import {SkillCard} from '../components/SkillCard';
import { StatusBar } from 'expo-status-bar';

interface SkillData{
  id: string;
  name: string;
}

export function Home() {
  
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, SetGretting] = useState('');
  
  useEffect(() => {
    const currentHour = new Date().getHours();

      if(currentHour < 12){
        SetGretting('Good Morning!');
      }else if(currentHour >= 12 && currentHour < 18){
        SetGretting('Good Afternoon!');
      }else{
        SetGretting('Good Night!');
      }


  }, []);

  function handleAddNewSkill(){

    if(newSkill === ''){
      return;
    }else{
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(oldState => [...oldState, data]);
    
  }
  }

  function handleRemoveSkill(id: string){
      setMySkills(oldState => oldState.filter(
        skill => skill.id!== id
      ))
  }

  return (
   
    <View className="flex-1 bg-zinc-900 pl-[20px] pr-[30px] pt-[70px] ">
      
      <Text className=" text-white text-2xl font-bold ">
        Welcome, Rafael </Text>
      <Text className="text-white">
        {gretting}
      </Text>

        <TextInput placeholder='New Skill' 
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        className="bg-zinc-800 text-white text-lg p-4 mt-[30px] rounded-md" />
      <StatusBar  />

      <Button title='Add New Skill' onPress={handleAddNewSkill}/> 

      <Text className=" text-white text-2xl font-bold mt-[50px] mt-12 mb-12 ">
        My Skills
      </Text>

      

      <FlatList data={mySkills}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <SkillCard skill={item.name}
        onPress={() => handleRemoveSkill(item.id)}
        />
      )}
         />
    <StatusBar style="light" />
    </View>
  );
}

