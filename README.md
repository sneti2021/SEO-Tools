# SeoMinds - Micro SEO Tools Platform

SeoMinds is a comprehensive, AI-powered SEO utility platform designed to help content creators, marketers, and webmasters optimize their digital presence. Built with React and TypeScript, it leverages the cutting-edge **Google Gemini 3.0 Flash** models to provide real-time, accurate insights.

## 🚀 Features

### 1. 📝 Free Online Plagiarism Checker
- **Deep Web Scanning**: Uses Google Search grounding to compare your text against billions of web pages.
- **Detailed Reports**: Provides a uniqueness score and highlights specific matching phrases with source links.
- **Privacy Focused**: Content is analyzed in real-time and not stored.

### 2. 🤖 Advanced AI Content Detector
- **Linguistic Analysis**: Detects patterns typical of LLMs like ChatGPT, Claude, and Gemini.
- **Score & Verdict**: Returns a probability score (0-100%) and a clear "Human", "AI", or "Mixed" verdict.
- **Burstiness & Perplexity**: Analyzes sentence variation and randomness to identify machine-generated text.

### 3. 🔗 Backlink Strategy Analyzer
- **Opportunity Discovery**: Finds high-quality guest posting and resource page opportunities.
- **Niche Specific**: tailored results based on your target keywords and website URL.
- **Authority Metrics**: Categorizes opportunities by potential domain authority (High/Medium).

### 4. 🏷️ AI Meta Tag Generator
- **Instant Optimization**: Generates SEO-friendly Title tags and Meta Descriptions.
- **Social Ready**: Automatically creates Open Graph (OG) tags for Facebook, Twitter, and LinkedIn previews.
- **CTR Focused**: Writes copy designed to maximize click-through rates in SERPs.

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI Engine**: Google GenAI SDK (`@google/genai`)
- **Model**: `gemini-3-flash-preview`
- **Routing**: React Router v7

## 📦 Usage

The application is built to run directly in modern environments supporting ES modules.

1. **API Key**: The application requires a valid `API_KEY` from Google AI Studio. This is injected via `process.env.API_KEY`.
2. **Navigation**: Use the top navigation bar to switch between tools.
3. **Quotas**: The tools utilize the Gemini API. Ensure your API key has sufficient quota.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).