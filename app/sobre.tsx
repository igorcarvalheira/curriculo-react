import { Image, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View className="flex-1 items-center justify-center bg-[#161616] px-6 py-10">
      <Image
        source={require('../assets/foto.png')}
        className="w-64 h-64 rounded-full mb-6"
        resizeMode="cover"
      />
      <Text className="text-3xl font-bold mb-4" style={{ color: '#FFD369' }}>
        Sobre Mim
      </Text>

      <Text className="text-xl text-center leading-relaxed" style={{ color: '#D9D7E5' }}>
        Oi! Meu nome é Igor Carvalheira e atualmente sou um estudante da Universidade Católica de Pernambuco no curso de ciência da computação. Me interesso nas áreas de tecnologia da informação e desenvolvimento web.{" "}
        No momento, estou estudando{" "}
        <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>HTML</Text>,{" "}
        <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>CSS</Text>,{" "}
        <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>JavaScript</Text>,{" "}
        <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>React</Text> e{" "}
        <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>Python</Text>.
      </Text>
    </View>
  );
}
