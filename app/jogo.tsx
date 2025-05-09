import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function JogoSenha() {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [historico, setHistorico] = useState<string[]>([]);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const soundRef = useRef<Audio.Sound | null>(null);

  const gerarSenha = (): string => {
    const digitos: number[] = [];
    while (digitos.length < 4) {
      const n = Math.floor(Math.random() * 10);
      if (!digitos.includes(n)) digitos.push(n);
    }
    return digitos.join('');
  };
  
  useEffect(() => {
    const iniciarSom = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/Robo Gang Johnny.mp3'),
          {
            shouldPlay: true,
            isLooping: true,
            volume: 0.2,
          }
        );
        soundRef.current = sound;
        await sound.playAsync();
      } catch (err) {
        console.error('Erro ao tocar música:', err);
      }
    };

    iniciarSom();

    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  useEffect(() => {
    setSenha(gerarSenha());
  }, []);

  const verificarTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      alert('Digite 4 dígitos únicos!');
      return;
    }

    let certeiros = 0;
    let quase = 0;

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senha[i]) {
        certeiros++;
      } else if (senha.includes(tentativa[i])) {
        quase++;
      }
    }

    const resultado = `${tentativa} ➝ ${certeiros} Certeiro(s), ${quase} Quase`;
    setHistorico([resultado, ...historico]);
    setTentativa('');

    if (certeiros === 4) {
      alert('Parabéns! Você acertou a senha! O jogo será reiniciado.');
      setSenha(gerarSenha());
      setMostrarSenha(false);
      setHistorico([]);
    }
  };

  return (
    <LinearGradient
      colors={['#000000', '#1a1a2e', '#2f2f3f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-gradient-to-br from-black via-[#1a1a2e] to-[#2f2f3f] px-5 py-6">
        <Pressable onPress={() => router.back()}style={{ position: 'absolute', left: 16, top: 48, zIndex: 10 }}>
          <Ionicons name="arrow-back" size={24} color="#FFD369" />
        </Pressable>

        <View className="flex-1 items-center justify-center mt-5">
          <Text style={{ fontSize: 28, color: '#FFD369', fontWeight: 'bold', marginBottom: 10 }}>Jogo da Senha</Text>

          <Text style={{ color: '#D9D7E5', textAlign: 'center', fontSize: 16, marginBottom: 20 }}>
            Descubra uma sequência de 4 dígitos únicos. A cada tentativa, você saberá quantos estão corretos e quantos estão quase!
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#0056b3',
              padding: 10,
              borderRadius: 8,
              marginBottom: 10,
            }}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>
              {mostrarSenha ? 'Ocultar Senha' : 'Mostrar Senha'}
            </Text>
          </TouchableOpacity>

          {mostrarSenha && (
            <Text style={{ color: '#00ff88', marginBottom: 10 }}>
              Senha atual: <Text style={{ fontWeight: 'bold' }}>{senha}</Text>
            </Text>
          )}

          <TextInput
            style={{
              backgroundColor: '#1a1a1a',
              color: '#D9D7E5',
              padding: 10,
              fontSize: 16,
              borderRadius: 8,
              textAlign: 'center',
              width: '30%',
              marginBottom: 10,
            }}
            maxLength={4}
            keyboardType="numeric"
            placeholder="Digite 4 dígitos"
            placeholderTextColor="#666"
            value={tentativa}
            onChangeText={(text) => setTentativa(text.replace(/\D/g, ''))}
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#007bff',
              padding: 10,
              borderRadius: 8,
              marginBottom: 20,
              width: '30%',
              alignItems: 'center',
            }}
            onPress={verificarTentativa}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Tentar</Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 20, color: '#FFD369', marginBottom: 10 }}>Tentativas:</Text>
          {historico.map((linha, index) => (
            <Text
              key={index}
              style={{
                backgroundColor: '#222',
                color: '#D9D7E5',
                padding: 8,
                borderRadius: 6,
                marginBottom: 5,
                width: '90%',
                textAlign: 'center',
              }}
            >
              {linha}
            </Text>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
