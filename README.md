# Pollinations AI Chat Platform

A modern, fully-featured AI chat application powered by [Pollinations.ai](https://pollinations.ai). Built with React, Express, and beautiful dark-mode UI.

## Features

✨ **Modern UI**
- Clean, dark aesthetic inspired by modern chat applications
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions

💬 **Chat Functionality**
- Real-time message streaming
- Chat history sidebar
- Auto-scrolling to latest messages
- Typing indicators

🔗 **Integration**
- Powered by Pollinations.ai API
- Secure backend proxy
- CORS-enabled for development

## Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- CSS3 (no dependencies)

**Backend:**
- Node.js
- Express.js
- Pollinations.ai API

## Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MeowSamOPDZN/ai-chat-platform.git
   cd ai-chat-platform
   ```

2. **Install dependencies:**
   ```bash
   npm run install:all
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   This will run both the frontend and backend concurrently:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001

## Usage

1. Open http://localhost:5173 in your browser
2. Type a message in the composer
3. Press Enter or click Send
4. Wait for the AI response from Pollinations.ai

## Project Structure

```
ai-chat-platform/
├── server/
│   ├── index.js          # Express backend
│   └── package.json
├── client/
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── main.jsx      # React entry point
│   │   └── styles.css    # Styling
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── package.json          # Root dependencies
├── .env                  # Environment variables
└── README.md
```

## Environment Variables

Create/update `.env` in the root:

```env
PORT=3001
```

## API Endpoints

### `POST /api/chat`

Send a message and get a response.

**Request:**
```json
{
  "message": "Hello, how are you?",
  "history": [
    { "role": "user", "content": "Hi" },
    { "role": "assistant", "content": "Hello!" }
  ]
}
```

**Response:**
```json
{
  "reply": "I'm doing great, thanks for asking!"
}
```

### `GET /api/health`

Check if the server is running.

**Response:**
```json
{
  "ok": true,
  "message": "Server is running"
}
```

## Deployment

### Build for Production

```bash
cd client && npm run build
```

This creates an optimized `dist/` folder.

### Deployment Options

- **Vercel**: Deploy frontend automatically from GitHub
- **Heroku**: Deploy backend with Procfile
- **Docker**: Create container for full-stack deployment

## Customization

### Change the Model

Edit `server/index.js` and modify the Pollinations URL:

```javascript
const pollinationsUrl = `https://text.pollinations.ai/openai?model=openai`;
```

### Styling

Edit `client/src/styles.css` to customize colors, fonts, and layout.

### Chat Behavior

Modify `client/src/App.jsx` to add features like:
- File uploads
- Model selection
- Temperature control
- System prompts

## Troubleshooting

**Port already in use?**
```bash
# Change PORT in .env or run on different port
PORT=3002 npm run server
```

**CORS errors?**
Ensure backend is running on port 3001 and frontend proxy in vite.config.js is correct.

**Pollinations API errors?**
Check your internet connection and Pollinations.ai status.

## License

MIT License - feel free to use this for personal or commercial projects.

## Contributing

Feel free to fork, modify, and submit pull requests!

## Support

For issues or questions, open a GitHub issue or contact the maintainers.

---

Built with ❤️ using Pollinations.ai
