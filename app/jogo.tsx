import { Text, View } from 'react-native';

export default function Jogo() {
  return (
    <View className="flex-1 items-center justify-center bg-[#161616] px-6 py-10">
      <Text className="text-4xl font-bold mb-4" style={{ color: '#FFD369' }}>
        Jogo da Senha
      </Text>

      <Text className="text-xl text-center leading-relaxed" style={{ color: '#D9D7E5' }}>
        Jogo da Senha (Bulls & Cows)
      </Text>
    </View>
  );
}