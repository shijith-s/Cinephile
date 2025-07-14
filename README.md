# 🎬 Cinephile

A modern React Native movie discovery app built with Expo that allows users to browse and search for movies using The Movie Database (TMDB) API.

## 📱 Features

- **Movie Discovery**: Browse popular and trending movies with infinite scroll
- **Smart Search**: Real-time movie search with debounced input for optimal performance
- **Movie Details**: View comprehensive information including ratings, budget, revenue, cast, and more
- **Modern UI**: Clean, responsive design with Tailwind CSS styling
- **Tab Navigation**: Intuitive bottom tab navigation between different sections
- **Optimized Loading**: Smooth loading states and error handling
- **Cross-Platform**: Works on iOS, Android, and Web

## 🚀 Technologies Used

### Frontend
- **React Native 0.79.5** - Cross-platform mobile development
- **Expo SDK 53** - Development platform and build tools
- **TypeScript** - Type safety and better development experience
- **Expo Router** - File-based navigation system
- **NativeWind** - Tailwind CSS for React Native
- **React Navigation** - Bottom tab navigation

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Icons** - Curated icon set for movie app
- **Expo Image** - Optimized image loading and caching
- **Responsive Design** - Adaptive layouts for different screen sizes

### Data & API
- **TMDB API** - The Movie Database for movie data
- **Custom Hooks** - Reusable data fetching logic
- **Infinite Scroll** - Efficient data loading
- **Debounced Search** - Optimized search functionality

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Expo CLI** - Development and build tools

## 📁 Project Structure

```
Cinephile/
├── app/                     # Main app screens and navigation
│   ├── (tabs)/             # Tab-based screens
│   │   ├── index.tsx       # Home screen with popular movies
│   │   ├── search.tsx      # Movie search functionality
│   │   ├── saved.tsx       # Saved movies (placeholder)
│   │   └── profile.tsx     # User profile (placeholder)
│   ├── movies/
│   │   └── [id].tsx        # Dynamic movie detail screen
│   └── _layout.tsx         # Root layout configuration
├── components/             # Reusable UI components
│   ├── MovieCard.tsx       # Movie grid card component
│   ├── MovieInfo.tsx       # Movie information display
│   ├── SearchBar.tsx       # Search input component
│   └── MovieListEmpty.tsx  # Empty state component
├── services/               # API and data services
│   ├── api.ts             # TMDB API integration
│   ├── TMDB_config.ts     # API configuration
│   ├── useFetchDetails.ts # Movie details hook
│   └── useInfiniteFetch.ts # Infinite scroll hook
├── constants/              # App constants
│   ├── icons.ts           # Icon assets
│   ├── images.ts          # Image assets
│   └── theme.ts           # Theme configuration
├── interfaces/             # TypeScript interfaces
│   └── interfaces.d.ts    # Movie and API type definitions
├── utils/                  # Utility functions
│   └── movieUtils.js      # Movie data transformation
└── assets/                # Static assets
    ├── icons/             # App icons
    └── images/            # Background images
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Cinephile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

### Running on Different Platforms

- **iOS**: `npm run ios`
- **Android**: `npm run android`
- **Web**: `npm run web`

### Getting TMDB API Key

1. Sign up at [The Movie Database](https://www.themoviedb.org/)
2. Go to your account settings
3. Navigate to the API section
4. Request an API key
5. Use the API key in your environment variables

## 🎯 Key Features Breakdown

### Home Screen
- Displays popular movies in a grid layout
- Infinite scroll for seamless browsing
- Search bar for quick movie discovery
- Movie cards with posters and ratings

### Search Functionality
- Real-time search with debounced input
- Search results with the same grid layout
- Loading states and error handling
- Empty state messaging

### Movie Details
- Comprehensive movie information
- High-quality poster images
- Ratings and vote counts
- Budget and revenue information
- Production company details
- Genre categorization

### Navigation
- Bottom tab navigation
- Smooth transitions between screens
- Back navigation with custom buttons

## 🔧 API Integration

The app integrates with The Movie Database (TMDB) API to fetch:
- Popular movies
- Movie search results
- Detailed movie information
- High-quality movie posters

### API Endpoints Used
- `/discover/movie` - Popular movies
- `/search/movie` - Movie search
- `/movie/{id}` - Movie details

## 📝 Future Enhancements

- **Saved Movies**: Implement local storage for favorite movies
- **User Profiles**: Add user authentication and personalization
- **Movie Trailers**: Integrate video playback for trailers
- **Reviews**: Add user reviews and ratings
- **Recommendations**: Personalized movie suggestions
- **Offline Mode**: Cache movies for offline viewing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [Expo](https://expo.dev/) for the amazing development platform
- [React Native](https://reactnative.dev/) for cross-platform capabilities

---

**Note**: This app is for educational and demonstration purposes. Please ensure you comply with TMDB's terms of service when using their API.

## 📸 Screenshots

*[Add your screenshots here]*
