import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

const projetos = [
  {
    titulo: 'App Portfólio',
    descricao:
      'Desenvolvido com React, Tailwind CSS e Expo Go para apresentar habilidades, experiências e projetos pessoais.',
    icone: <Ionicons name="phone-portrait-outline" size={30} color="#FFD369" />,
  },
  {
    titulo: 'Jogo da Senha',
    descricao:
      'Um jogo interativo criado com React Native inspirado no clássico Mastermind, com lógica de pontuação.',
    icone: <FontAwesome5 name="gamepad" size={30} color="#FFD369" />,
  },
  {
    titulo: 'Site para Hotel (Star Hotel)',
    descricao:
      'Plataforma com sistema de reservas online, previsão do tempo em Limoeiro, galeria de fotos e painel administrativo.',
    tecnologias:
      'React + Vite, Tailwind CSS, Back4App, OpenWeather API, React Router, Vercel.',
    icone: <FontAwesome5 name="hotel" size={30} color="#FFD369" />,
  },
  {
    titulo: 'Projeto de Robótica Inclusiva',
    descricao:
      'Sistema de alerta visual para motoristas surdos, detectando buzinas e sirenes e convertendo em sinais luminosos.',
    tecnologias:
      'Arduino Uno, sensores de som, LEDs, Arduino IDE, Python (numpy, matplotlib, pyserial), FFT, média móvel.',
    icone: <FontAwesome5 name="microchip" size={30} color="#FFD369" />,
  },
  {
    titulo: 'Tabelas para Organização Financeira',
    descricao:
      'Tabelas em Google Sheets/Excel para controle de receitas, despesas e saldo da Biblioteca Comunitária Caranguejo Tabaiares.',
    tecnologias: 'Fórmulas automáticas, tabelas dinâmicas.',
    icone: <MaterialIcons name="table-chart" size={30} color="#FFD369" />,
  },
];

export default function Projetos() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#161616] pt-16 px-6">
      <Pressable onPress={() => router.back()} className="absolute left-4 top-12 z-10">
        <Ionicons name="arrow-back" size={24} color="#FFD369" />
      </Pressable>

      <Text className="text-4xl font-bold text-center mb-8 text-[#FFD369]">Projetos</Text>

      <ScrollView showsVerticalScrollIndicator={false} className="pb-32">
        {projetos.map((projeto, index) => (
          <View key={index} className="bg-[#1e1e1e] rounded-2xl p-4 mb-4 flex-row items-center space-x-4">
            {projeto.icone}
            <View className="flex-1">
              <Text className="text-lg font-bold text-[#FFD369]">{projeto.titulo}</Text>
              <Text className="text-sm text-[#D9D7E5]">{projeto.descricao}</Text>
              {projeto.tecnologias && (
                <Text className="text-xs text-gray-400 mt-2">
                  <Text className="font-bold text-[#FFD369]">Tecnologias: </Text>
                  {projeto.tecnologias}
                </Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
