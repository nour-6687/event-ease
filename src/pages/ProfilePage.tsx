import React, { useState } from 'react';
import { User, Settings, LogOut, Camera, Edit2, Lock } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  profilePicture: string;
  preferences: {
    eventTypes: string[];
    notifications: boolean;
  };
}

export function ProfilePage() {
  // Mock user data - in a real app, this would come from an API or context
  const [user, setUser] = useState<UserProfile>({
    name: 'Tommy Shelby',
    email: 'ThomasShelby@example.com',
    phone: '+1 (555) 123-4567',
    profilePicture: 'https://images3.alphacoders.com/122/1221422.jpg',
    preferences: {
      eventTypes: ['Wedding', 'Birthday', 'Party'],
      notifications: true,
    },
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isEditingPreferences, setIsEditingPreferences] = useState(false);

  // Form state for editing profile
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  // Password change form state
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Preferences form state
  const [preferencesData, setPreferencesData] = useState({
    eventTypes: [...user.preferences.eventTypes],
    notifications: user.preferences.notifications,
  });

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });
    setIsEditingProfile(false);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    console.log('Password changed');
    setIsChangingPassword(false);
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handlePreferencesUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      ...user,
      preferences: preferencesData,
    });
    setIsEditingPreferences(false);
  };

  const handleLogout = () => {
    // In a real app, you would clear auth tokens, etc.
    console.log('Logging out');
    // Redirect to sign in page
    window.location.href = '/signin';
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUser({
            ...user,
            profilePicture: event.target.result as string,
          });
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const eventTypeOptions = [
    'Wedding',
    'Engagement',
    'Birthday',
    'Graduation',
    'Party',
    'Seminar',
    'Workshop',
    'Other',
  ];

  return (
    <main className="flex-1 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            My <span className="text-pink-500">Profile</span>
          </h1>
          <p className="text-xl text-gray-300">
            Manage your account information and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Picture and Logout */}
          <div className="md:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col items-center">
              <div className="relative group mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500">
                  <img
                    src={user.profilePicture}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <label className="absolute bottom-0 right-0 bg-pink-500 p-2 rounded-full cursor-pointer group-hover:bg-pink-400 transition-colors">
                  <Camera className="h-5 w-5 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                  />
                </label>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
              <p className="text-gray-400 mb-6">{user.email}</p>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Right Column - User Information and Preferences */}
          <div className="md:col-span-2 space-y-8">
            {/* User Information Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Personal Information</h2>
                </div>
                {!isEditingProfile && (
                  <button
                    onClick={() => setIsEditingProfile(true)}
                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                  >
                    <Edit2 className="h-4 w-4" />
                    Edit
                  </button>
                )}
              </div>

              {isEditingProfile ? (
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditingProfile(false)}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:to-pink-400 transition-all"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Full Name</h3>
                    <p className="text-white">{user.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Email Address</h3>
                    <p className="text-white">{user.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Phone Number</h3>
                    <p className="text-white">{user.phone}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Password Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Password</h2>
                </div>
                {!isChangingPassword && (
                  <button
                    onClick={() => setIsChangingPassword(true)}
                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                  >
                    <Edit2 className="h-4 w-4" />
                    Change Password
                  </button>
                )}
              </div>

              {isChangingPassword ? (
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Current Password</label>
                    <input
                      type="password"
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">New Password</label>
                    <input
                      type="password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Confirm New Password</label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className="w-full px-4 py-2 bg-gray-700/50 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsChangingPassword(false)}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:to-pink-400 transition-all"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              ) : (
                <p className="text-gray-400">••••••••••••</p>
              )}
            </div>

            {/* Preferences Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-purple-400" />
                  <h2 className="text-xl font-bold text-white">Preferences</h2>
                </div>
                {!isEditingPreferences && (
                  <button
                    onClick={() => setIsEditingPreferences(true)}
                    className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
                  >
                    <Edit2 className="h-4 w-4" />
                    Edit
                  </button>
                )}
              </div>

              {isEditingPreferences ? (
                <form onSubmit={handlePreferencesUpdate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Event Types</label>
                    <div className="grid grid-cols-2 gap-2">
                      {eventTypeOptions.map((type) => (
                        <label key={type} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={preferencesData.eventTypes.includes(type)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setPreferencesData({
                                  ...preferencesData,
                                  eventTypes: [...preferencesData.eventTypes, type],
                                });
                              } else {
                                setPreferencesData({
                                  ...preferencesData,
                                  eventTypes: preferencesData.eventTypes.filter((t) => t !== type),
                                });
                              }
                            }}
                            className="rounded border-gray-600 text-purple-500 focus:ring-purple-500 bg-gray-700"
                          />
                          <span className="text-white">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Notifications</label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preferencesData.notifications}
                        onChange={(e) => setPreferencesData({ ...preferencesData, notifications: e.target.checked })}
                        className="rounded border-gray-600 text-purple-500 focus:ring-purple-500 bg-gray-700"
                      />
                      <span className="text-white">Receive email notifications for events</span>
                    </label>
                  </div>
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditingPreferences(false)}
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-500 hover:to-pink-400 transition-all"
                    >
                      Save Preferences
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Preferred Event Types</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {user.preferences.eventTypes.map((type) => (
                        <span
                          key={type}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Notifications</h3>
                    <p className="text-white">
                      {user.preferences.notifications ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}