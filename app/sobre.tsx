import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Sobre() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#000000', '#1a1a2e', '#2f2f3f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Pressable
          onPress={() => router.back()}
          style={{ position: 'absolute', left: 16, top: 48, zIndex: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="#FFD369" />
        </Pressable>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 100,
            paddingBottom: 120,
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#FFD369',
              marginBottom: 24,
            }}
          >
            Sobre
          </Text>

          <View style={{ alignItems: 'center', padding: 24 }}>
            <Image
              source={require('../assets/foto.png')}
              style={{
                width: 250,
                height: 250,
                borderRadius: 125,
                resizeMode: 'cover',
                borderWidth: 2,
                borderColor: '#FFD369',
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: '#ffffff10',
              padding: 16,
              borderRadius: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
              marginBottom: 24,
            }}
          >
            <Text style={{ fontSize: 16, color: '#D9D7E5', lineHeight: 24 }}>
              Oi! Meu nome é Igor Carvalheira e atualmente sou um estudante da Universidade Católica de Pernambuco no curso de ciência da computação. Me interesso nas áreas de tecnologia da informação e desenvolvimento web.{' '}
              No momento, estou estudando{' '}
              <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>HTML</Text>,{' '}
              <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>CSS</Text>,{' '}
              <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>JavaScript</Text>,{' '}
              <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>React</Text> e{' '}
              <Text style={{ color: '#FFD369', fontWeight: 'bold' }}>Python</Text>.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
