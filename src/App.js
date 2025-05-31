import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile
        username="Petra Marica"
        tag="@pmarica"
        location="Salvador, Brasil"
        avatar="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        stats={{
          followers: 1000,
          views: 2000,
          likes: 500
        }}
      />
      
      <Statistics title="Upload stats" stats={[
        { id: 'id-1', label: '.docx', percentage: 22 },
        { id: 'id-2', label: '.pdf', percentage: 4 },
        { id: 'id-3', label: '.mp3', percentage: 17 },
        { id: 'id-4', label: '.psd', percentage: 47 },
        { id: 'id-5', label: '.pdf', percentage: 10 }
      ]} />
      
      <FriendList friends={[
        { id: 1, name: 'Mango', isOnline: true, avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' },
        { id: 2, name: 'Kiwi', isOnline: false, avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' },
        { id: 3, name: 'Poly', isOnline: true, avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }
      ]} />
      
      <TransactionHistory items={[
        { id: 1, type: 'invoice', amount: '125', currency: 'USD' },
        { id: 2, type: 'withdrawal', amount: '85', currency: 'USD' },
        { id: 3, type: 'invoice', amount: '250', currency: 'USD' },
        { id: 4, type: 'payment', amount: '100', currency: 'USD' }
      ]} />
    </div>
  );
}

export default App; 