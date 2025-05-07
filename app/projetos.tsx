import { ScrollView, Text, View } from 'react-native';

export default function Projetos() {
  return (
    <View className="flex-1 bg-[#161616] pt-16 px-6">
      <Text className="text-4xl font-bold text-center mb-8" style={{ color: '#FFD369' }}>
        Projetos
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} className="space-y-8 pb-32">
      {[
        {
          titulo: 'App Portfólio',
          descricao:
            'Desenvolvido com React, Tailwind CSS e Expo Go para apresentar habilidades, experiências e projetos pessoais.',
        },
        {
          titulo: 'Jogo da Senha',
          descricao:
            'Um jogo interativo criado com React Native inspirado no clássico Mastermind, com lógica de pontuação.',
        },
        {
          titulo: 'Site para Hotel (Star Hotel)',
          descricao:
            'Plataforma com sistema de reservas online, previsão do tempo em Limoeiro, galeria de fotos e painel administrativo.',
            tecnologias: 'React + Vite, Tailwind CSS, Back4App, OpenWeather API, React Router, Vercel.'
        },
        {
          titulo: 'Projeto de Robótica Inclusiva',
          descricao:
            'Sistema de alerta visual para motoristas surdos, detectando buzinas e sirenes e convertendo em sinais luminosos.',
          tecnologias:
            'Arduino Uno, sensores de som, LEDs, Arduino IDE, Python (numpy, matplotlib, pyserial), FFT, média móvel.',
        },
        {
          titulo: 'Tabelas para Organização Financeira',
          descricao:
            'Tabelas em Google Sheets/Excel para controle de receitas, despesas e saldo da Biblioteca Comunitária Caranguejo Tabaiares.',
          tecnologias: 'Fórmulas automáticas, tabelas dinâmicas.',
        },
      ].map((projeto, index) => (
        <View key={index} className="bg-[#1e1e1e] rounded-2xl p-8 mb-8">
          <Text className="text-[20px] font-semibold mb-2" style={{ color: '#FFD369' }}>
            {projeto.titulo}
          </Text>
          <Text className="text-base text-[#D9D7E5] leading-relaxed text-[16px]">
            {projeto.descricao}
          </Text>
          {projeto.tecnologias && (
            <Text className="text-[14px] text-[#D9D7E5] mt-3 leading-relaxed">
              <Text className="font-bold">Tecnologias: </Text>
              {projeto.tecnologias}
            </Text>
          )}
        </View>
      ))}
    </ScrollView>
    </View>
  );
}
