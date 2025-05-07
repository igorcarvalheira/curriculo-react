import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

type ItemProps = {
  titulo: string;
  subtitulo: string;
  periodo: string;
  icone: React.ReactNode;
};

function ItemAcademico({ titulo, subtitulo, periodo, icone }: ItemProps) {
  return (
    <View className="bg-[#1e1e1e] rounded-2xl p-4 mb-4 flex-row items-center space-x-4">
      {icone}
      <View className="flex-1">
        <Text className="text-lg font-bold text-[#FFD369]">{titulo}</Text>
        <Text className="text-sm text-[#D9D7E5]">{subtitulo}</Text>
        <Text className="text-xs text-gray-400">{periodo}</Text>
      </View>
    </View>
  );
}

export default function ExperienciaAcademica() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#161616] pt-16 px-6">
      <Pressable onPress={() => router.back()} className="absolute left-4 top-12 z-10">
        <Ionicons name="arrow-back" size={24} color="#FFD369" />
      </Pressable>

      <Text className="text-4xl font-bold text-center mb-8 text-[#FFD369]">
        Experiência Acadêmica
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} className="pb-32">
        <ItemAcademico
          titulo="Ciência da Computação"
          subtitulo="Universidade Católica de Pernambuco"
          periodo="5º Período - Em andamento"
          icone={<Ionicons name="school" size={30} color="#FFD369" />}
        />
        <ItemAcademico
          titulo="HTML5 e CSS3"
          subtitulo="Curso em Vídeo"
          periodo="2023"
          icone={<FontAwesome5 name="html5" size={30} color="#FFD369" />}
        />
        <ItemAcademico
          titulo="Python 3"
          subtitulo="Curso em Vídeo"
          periodo="2023"
          icone={<FontAwesome5 name="python" size={30} color="#FFD369" />}
        />
      </ScrollView>
    </View>
  );
}