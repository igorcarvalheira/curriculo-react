import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';

export default function Sobre() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#161616] pt-16 px-6">
      <Pressable onPress={() => router.back()} className="absolute left-4 top-12 z-10">
        <Ionicons name="arrow-back" size={24} color="#FFD369" />
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false} className="space-y-8 pb-32">
        <Text className="text-4xl font-bold text-center mb-4" style={{ color: '#FFD369' }}>
          Sobre
        </Text>

        <View className="items-center p-8">
          <Image
            source={require('../assets/foto.png')}
            className="rounded-full"
            style={{
              width: 250,
              height: 250,
              resizeMode: 'cover',
              borderWidth: 2,
              borderColor: '#FFD369',
            }}
          />
        </View>

        <View className="bg-[#1e1e1e] rounded-2xl p-8">
          <Text className="text-xl text-[#D9D7E5] leading-relaxed text-[16px]">
              Oi! Meu nome é Igor Carvalheira e atualmente sou um estudante da Universidade Católica de Pernambuco no curso de ciência da computação. Me interesso nas áreas de tecnologia da informação e desenvolvimento web.{" "}
            No momento, estou estudando{" "}
            <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>HTML</Text>,{" "}
            <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>CSS</Text>,{" "}
            <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>JavaScript</Text>,{" "}
            <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>React</Text> e{" "}
            <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>Python</Text>. 
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
