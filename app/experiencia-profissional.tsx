import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

type ExperienciaItemProps = {
  titulo: string;
  descricao: string;
  tecnologias?: string;
  icone: React.ReactNode;
};

function ExperienciaItem({ titulo, descricao, tecnologias, icone }: ExperienciaItemProps) {
  return (
    <View className="bg-[#ffffff10] p-4 rounded-2xl shadow-md mb-4 flex-row items-center space-x-4">
      {icone}
      <View className="flex-1">
        <Text className="text-lg font-bold text-[#FFD369]">{titulo}</Text>
        <Text className="text-sm text-[#D9D7E5]">{descricao}</Text>
        {tecnologias && (
          <Text className="text-xs text-gray-400 mt-2">
            <Text className="font-bold text-[#FFD369]">Tecnologias: </Text>
            {tecnologias}
          </Text>
        )}
      </View>
    </View>
  );
}

export default function ExperienciaProfissional() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#000000', '#1a1a2e', '#2f2f3f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          paddingTop: 72,
          paddingBottom: 64,
          paddingHorizontal: 24,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Pressable onPress={() => router.back()}style={{ position: 'absolute', left: 16, top: 48, zIndex: 10 }}>
          <Ionicons name="arrow-back" size={24} color="#FFD369" />
        </Pressable>

        <Text className="text-4xl font-bold text-center mb-8 text-[#FFD369]">
          Experiência Profissional
        </Text>

        <View className="bg-[#ffffff10] p-4 rounded-2xl shadow-md mb-4">
          <Text className="text-base text-[#D9D7E5] leading-relaxed">
            Embora ainda não tenha experiência profissional formal, venho desenvolvendo projetos práticos em <Text className="text-[#FFD369] font-bold">HTML, CSS, React, React Native, Tailwind CSS</Text>, entre outras tecnologias.
          </Text>
        </View>

        <ExperienciaItem
          titulo="Projetos com HTML, CSS, React e React Native"
          descricao="Criação de sites, aplicativos, portfólios e jogos interativos."
          icone={<FontAwesome5 name="laptop-code" size={30} color="#FFD369" />}
        />
        <ExperienciaItem
          titulo="Automação em Planilhas"
          descricao="Desenvolvimento de planilhas no Excel/Sheets para organizações comunitárias."
          icone={<MaterialIcons name="table-chart" size={30} color="#FFD369" />}
        />
        <ExperienciaItem
          titulo="Projeto Acadêmico com Arduino"
          descricao="Sistema de alerta visual para pessoas surdas com LEDs e sensores sonoros."
          icone={<FontAwesome5 name="microchip" size={30} color="#FFD369" />}
        />
        <ExperienciaItem
          titulo="Formações em Desenvolvimento Front-End"
          descricao="Participação contínua em cursos voltados à programação e design de interfaces."
          icone={<Ionicons name="school-outline" size={30} color="#FFD369" />}
        />
        <ExperienciaItem
          titulo="Site para Hotel (Star Hotel)"
          descricao="Plataforma com sistema de reservas online, previsão do tempo em Limoeiro, galeria de fotos e painel administrativo."
          tecnologias="React + Vite, Tailwind CSS, Back4App, OpenWeather API, React Router, Vercel."
          icone={<FontAwesome5 name="hotel" size={30} color="#FFD369" />}
        />
      </ScrollView>
    </LinearGradient>
  );
}