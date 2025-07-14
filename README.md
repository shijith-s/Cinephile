# 🎬 Cinephile

A modern React Native movie discovery app built with Expo that allows users to browse and search for movies using The Movie Database (TMDB) API.

## 📱 Features

- **Movie Discovery**: Browse popular movies with infinite scroll
- **Smart Search**: Real-time movie search with debounced input
- **Movie Details**: Comprehensive movie information with ratings, budget, and cast
- **Modern UI**: Clean design with Tailwind CSS styling
- **Cross-Platform**: Works on iOS, Android, and Web

### 📸 App Screenshots
<p align="center">
  <img src="https://github.com/user-attachments/assets/a9aa3f4b-187b-45b8-8ce7-fc67fd70faf8" alt="Home Screen" width="200"/>
    &nbsp;
    &nbsp;
    &nbsp;
  <img src="https://github.com/user-attachments/assets/e33577fd-9a36-42b8-9d2c-603495f3e4ce" alt="Search Screen" width="200"/>
    &nbsp;
    &nbsp;
    &nbsp;
  <img src="https://github.com/user-attachments/assets/de9acf96-b972-4b7e-b1d3-3b3a148e2d39" alt="Details Screen" width="200"/>
</p>

## 🚀 Technologies Used

- **React Native 0.79.5** + **Expo SDK 53**
- **TypeScript** for type safety
- **Expo Router** for navigation
- **NativeWind** (Tailwind CSS)
- **TMDB API** for movie data

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16+)
- Expo CLI (`npm install -g @expo/cli`)
- TMDB API key

### Installation

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd Cinephile
   npm install
   ```

2. **Set up environment variables**
   Create a `.env` file:
   ```env
   EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

3. **Start the app**
   ```bash
   npm start
   ```

### Get TMDB API Key
1. Sign up at [The Movie Database](https://www.themoviedb.org/)
2. Go to Account Settings → API
3. Request an API key

## 📁 Project Structure

```
Cinephile/
├── app/                     # Screens and navigation
│   ├── (tabs)/             # Tab screens (home, search, saved, profile)
│   └── movies/[id].tsx     # Movie detail screen
├── components/             # Reusable UI components
├── services/               # API integration and hooks
├── constants/              # Theme, icons, images
├── interfaces/             # TypeScript definitions
└── utils/                  # Helper functions
```

## 🎯 Key Features

### Home Screen
- Grid layout of popular movies
- Infinite scroll loading
- Quick search access

### Search Functionality
- Real-time search with debouncing
- Same grid layout as home
- Loading states and error handling

### Movie Details
- Full movie information
- Ratings and vote counts
- Budget, revenue, and production details

## 🔧 API Integration

Uses TMDB API endpoints:
- `/discover/movie` - Popular movies
- `/search/movie` - Movie search
- `/movie/{id}` - Movie details

## 📝 Future Enhancements

- Local storage for saved movies
- User authentication and profiles
- Movie trailers integration
- User reviews and ratings
- Offline mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push and open a Pull Request

## 📄 License

MIT License

---

**Note**: Educational project. Please comply with TMDB's terms of service.
