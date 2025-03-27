# 🎥 YouTube Clone

A fully functional YouTube Clone web application built with **React** that fetches data using **API calls**. Users can view trending content with category filter, and watch videos seamlessly.

## 🚀 Demo video

https://www.dropbox.com/scl/fi/smiln5d1z0bs39x6xre79/YouTube-Google-Chrome-2025-03-27-21-07-03.mp4?rlkey=g0d033atp1wyu3srd61etguyi&st=snqzwh2f&dl=0

## 📦 Features

- 🎬 View trending videos
- 📺 Watch videos with details
- 📊 Responsive and user-friendly interface

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router
- **API**: YouTube Data API v3
- **Styling**: CSS

## 📄 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KhemchandSahu/YouTube-Clone
   cd Youtube-Clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up API key:

   - Create a `.env` file in the root directory.
   - Add your YouTube API key:

   ```bash
   REACT_APP_YOUTUBE_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## 🔗 API Reference

This app uses the YouTube Data API v3
(https://developers.google.com/youtube/v3) for video data.

Example request to fetch trending videos:

```bash
GET https://www.googleapis.com/youtube/v3/videos
  ?part=snippet,contentDetails,statistics
  &chart=mostPopular
  &regionCode=US
  &key=YOUR_API_KEY
```

## 📁 Folder Structure

```
├── public
├── src
│   ├── components
│   │     ├── Data.js
│   │     ├── Feed.jsx
│   │     ├── Feed.css
│   │     ├── Home.jsx
│   │     ├── Home.css
│   │     ├── Navbar.jsx
│   │     ├── Navbar.css
│   │     ├── Sidebar.jsx
│   │     ├── Sidebar.css
│   │     ├── VideoPage.jsx
│   │     └── VideoPage.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit a pull request.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Commit changes:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/new-feature
   ```

5. Open a pull request.


## 📧 Contact

- **Email**: kecysh@email.com
- **GitHub**: github.com/KhemchandSahu or github.com/Kecyverse

