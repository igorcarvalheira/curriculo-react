import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center px-6 bg-[#161616]">
      <Text className="text-4xl font-bold" style={{ color: '#FFD369' }}>
        Igor Carvalheira
      </Text>

      <Text className="text-xl mt-2 mb-6" style={{ color: '#D9D7E5' }}>
        Desenvolvedor Front-End
      </Text>

      <Link href="/sobre" asChild>
        <Pressable className="bg-[#ffffff10] p-4 rounded-2xl shadow-md mb-4 w-full">
          {({ pressed }) => (
            <Text
              className="text-xl font-semibold text-center"
              style={{ color: pressed ? '#0056b3' : '#D9D7E5' }}
            >
              Sobre
            </Text>
          )}
        </Pressable>
      </Link>

      <Link href="/experiencia-academica" asChild>
        <Pressable className="bg-[#ffffff10] p-4 rounded-2xl shadow-md mb-4 w-full">
          {({ pressed }) => (
            <Text
              className="text-xl font-semibold text-center"
              style={{ color: pressed ? '#0056b3' : '#D9D7E5' }}
            >
              Experiência Acadêmica
            </Text>
          )}
        </Pressable>
      </Link>

      <Link href="/experiencia-profissional" asChild>
        <Pressable className="bg-[#ffffff10] p-4 rounded-2xl shadow-md mb-4 w-full">
          {({ pressed }) => (
            <Text
              className="text-xl font-semibold text-center"
              style={{ color: pressed ? '#0056b3' : '#D9D7E5' }}
            >
              Experiência Profissional
            </Text>
          )}
        </Pressable>
      </Link>

      <Link href="/projetos" asChild>
        <Pressable className="bg-[#ffffff10] p-4 rounded-2xl shadow-md mb-4 w-full">
          {({ pressed }) => (
            <Text
              className="text-xl font-semibold text-center"
              style={{ color: pressed ? '#0056b3' : '#D9D7E5' }}
            >
              Projetos
            </Text>
          )}
        </Pressable>
      </Link>

      <Link href="/jogo" asChild>
        <Pressable className="bg-[#ffffff10] p-4 rounded-2xl shadow-md w-full">
          {({ pressed }) => (
            <Text
              className="text-xl font-semibold text-center"
              style={{ color: pressed ? '#0056b3' : '#D9D7E5' }}
            >
              Jogo
            </Text>
          )}
        </Pressable>
      </Link>
    </View>
  );
}
