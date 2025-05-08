import { BebasNeue_400Regular, useFonts } from '@expo-google-fonts/bebas-neue';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Home() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center px-6 bg-gradient-to-br from-black via-[#1a1a2e] to-[#2f2f3f] py-6">
      <Text
        className="text-7xl tracking-wide text-center"
        style={{
          fontFamily: 'BebasNeue_400Regular',
          color: '#FFD369',
          textShadowColor: '#000',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 4,
        }}
      >
        Igor Carvalheira
      </Text>

      <Text className="text-xl mt-2 mb-6 text-center" style={{ color: '#D9D7E5' }}>
        Desenvolvedor Front-End
      </Text>

      {[
        { title: 'Sobre', href: '/sobre' },
        { title: 'Experiência Acadêmica', href: '/experiencia-academica' },
        { title: 'Experiência Profissional', href: '/experiencia-profissional' },
        { title: 'Projetos', href: '/projetos' },
        { title: 'Jogo', href: '/jogo' },
      ].map(({ title, href }) => (
        <Link key={href} href={href as any} asChild>
          <Pressable className="bg-[#ffffff10] px-4 py-3 rounded-2xl shadow-md mb-4 w-2/5">
            {({ pressed }) => (
              <Text
                className="text-lg font-semibold text-center"
                style={{ color: pressed ? '#0056b3' : '#D9D7E5' }}
              >
                {title}
              </Text>
            )}
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
