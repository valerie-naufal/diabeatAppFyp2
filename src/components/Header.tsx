import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {db, auth} from '../firebase/config';
import {doc, getDoc} from 'firebase/firestore';

export default function Header() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log('FETCH PROFILE EFFECT RUNNING');

        const user = auth.currentUser;

        console.log('current user:', user);
        if (!user) return;

        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          console.log('No profile found.');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Hi, </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  icon: {width: 50, height: 50, resizeMode: 'contain'},
  greeting: {color: '#ff0000', fontWeight: '600', fontSize: 18},
});
