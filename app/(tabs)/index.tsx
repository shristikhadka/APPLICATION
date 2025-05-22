import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { auth } from '../../FirebaseConfig';
import { TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {
  const [user, setUser] = useState(auth.currentUser);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        // User is signed out, navigate to login screen
        router.replace('/');
      }
    });

    return unsubscribe;
  }, []);

  const handleSignOut = async () => {
    try {
      console.log('Signing out user:', user?.email);
      await signOut(auth);
      console.log('Sign out successful');
      // The onAuthStateChanged listener will handle navigation
    } catch (error: any) {
      console.error('Error signing out:', error);
      Alert.alert('Sign Out Error', error.message || 'Failed to sign out');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.greeting}>Welcome to Memora</Text>
        <Text style={styles.username}>{user?.email?.split('@')[0] || 'User'}</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/two')}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="list-ul" size={24} color="#2f95dc" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Tasks</Text>
            <Text style={styles.menuDescription}>Manage your todo list</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/three')}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="folder" size={24} color="#2f95dc" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Files</Text>
            <Text style={styles.menuDescription}>Upload and manage files</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push('/(tabs)/four')}
        >
          <View style={styles.iconContainer}>
            <FontAwesome name="bolt" size={24} color="#2f95dc" />
          </View>
          <View style={styles.menuTextContainer}>
            <Text style={styles.menuTitle}>Functions</Text>
            <Text style={styles.menuDescription}>Run Firebase functions</Text>
          </View>
          <FontAwesome name="chevron-right" size={16} color="#ccc" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.signOutButton}
        onPress={handleSignOut}
      >
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  welcomeSection: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuContainer: {
    width: '100%',
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  menuDescription: {
    fontSize: 14,
    color: '#666',
  },
  signOutButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  signOutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
