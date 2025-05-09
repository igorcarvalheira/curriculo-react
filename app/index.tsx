import { BebasNeue_400Regular, useFonts } from '@expo-google-fonts/bebas-neue';
import { LinearGradient } from 'expo-linear-gradient'; // ✅ IMPORTANTE
import { Link } from 'expo-router';
import { Pressable, Text } from 'react-native';

export default function Home() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#000000', '#1a1a2e', '#2f2f3f']} // ✅ Gradiente aplicado corretamente
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, paddingVertical: 24 }}
    >
      <Text
        style={{
          fontFamily: 'BebasNeue_400Regular',
          color: '#FFD369',
          fontSize: 64,
          textAlign: 'center',
          letterSpacing: 2,
          textShadowColor: '#000',
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 4,
        }}
      >
        Igor Carvalheira
      </Text>

      <Text style={{ color: '#D9D7E5', fontSize: 18, marginTop: 8, marginBottom: 24, textAlign: 'center' }}>
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
          <Pressable
            style={{
              backgroundColor: '#ffffff10',
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderRadius: 16,
              marginBottom: 16,
              width: '40%',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              alignItems: 'center',
            }}
          >
            {({ pressed }) => (
              <Text
                style={{
                  color: pressed ? '#0056b3' : '#D9D7E5',
                  fontSize: 16,
                  fontWeight: '600',
                  textAlign: 'center',
                }}
              >
                {title}
              </Text>
            )}
          </Pressable>
        </Link>
      ))}
    </LinearGradient>
  );
}
