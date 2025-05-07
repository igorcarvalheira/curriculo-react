import { Text, View } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <View className="flex-1 items-center justify-center bg-[#161616] px-6 py-10">
      <Text className="text-4xl font-bold mb-4" style={{ color: '#FFD369' }}>
        Experiência Profissional
      </Text>

      <Text className="text-xl text-center leading-relaxed" style={{ color: '#D9D7E5' }}>
        Embora ainda não tenha experiência profissional formal, venho desenvolvendo projetos práticos em HTML, CSS, React, React Native e Arduino.
        {'\n\n'}- Criação de sites e aplicações como portfólios, jogos interativos.
        {'\n'}- Sistemas de planilhas automatizadas em Excel para organizações comunitárias.
        {'\n'}- Participação em projetos acadêmicos, como um sistema de alerta visual para surdos.
        {'\n'}- Cursos e trilhas de formação voltadas ao desenvolvimento front-end em andamento.
      </Text>
    </View>
  );
}