import { Text, View } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View className="flex-1 items-center justify-center bg-[#161616] px-6 py-10">
      <Text className="text-4xl font-bold mb-4" style={{ color: '#FFD369' }}>
        Experiência Acadêmica
      </Text>

      <Text className="text-xl text-center leading-relaxed" style={{ color: '#D9D7E5' }}>
        - Cursando Ciência da Computação (5° Período) - Universidade Católica de Pernambuco
        {'\n'}- Curso em Vídeo - HTML5 e CSS3
        {'\n'}- Curso em Vídeo - Python 3
      </Text>
    </View>
  );
}