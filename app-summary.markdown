# GoBirding - Your AI-Powered Birding Companion

## 🎯 **What is GoBirding?**

GoBirding is a sophisticated iOS app that transforms how birding enthusiasts discover and explore birding locations. Using cutting-edge AI technology and voice commands, it helps you find the perfect birding spots across all **50 US states** and **7 Canadian provinces** with intelligent recommendations tailored to your preferences. With over **19,200** carefully curated hotspots and advanced location detection, GoBirding provides the most comprehensive birding database available on iOS.

## 🚀 **Core Features**

### 🎤 **Voice-Powered Search**
- Natural voice commands (e.g., "Find me spots with a lighthouse", "Show me locations in Ocean County")
- Real-time transcription with enhanced suppression of transient errors
- Hands-free operation ideal for field use

### 🤖 **Advanced AI Intelligence (On-Device)**
- Local AI processing powered by **MLX-optimized Qwen 3 0.6B (4‑bit)**
- Complete privacy: All inference happens on-device
- **Response Style** in Settings (inside AI Model card): choose **Accurate** or **Creative** presets
- Streamlined architecture: JSON search + LLM explanation for the top choice only
- Accurate county detection and dynamic weighting for proximity, diversity, and relevance

### 📦 **Model Handling & Stability**
- Automatic download with explicit user consent; approx. size **~332 MB**
- Device-aware GPU cache on iPhone: **512 MB on iPhone 15+**, **256 MB on older models**
- Older iPads with known Metal compiler instability (e.g., 2018 11" iPad Pro A1980 family) automatically fall back to non‑LLM explanations for stability

### 🗺️ **Interactive Hotspot Map**
- Split-screen layout with interactive pins and synchronized list
- Smart region fitting and real-time user location tracking
- County filtering and favorites overlay

### 📍 **Comprehensive Location Database**
- **19,200+ hotspots** across the US and Canada
- Rich details: species counts, habitat descriptions, eBird resources
- GeoJSON-based region detection for precise state/province mapping
- Offline operation for instant access in the field

### 🎨 **Modern, Refined Interface**
- Clean SwiftUI design for iOS 18+
- Settings → **AI Model** card includes: model details, **Response Style (dropdown)**, and **Reload Model**
- TTS-optimized explanations with natural sentences

## 🧠 **Intelligent Search & Ranking**
- Proximity detection for nearest and distance-focused queries
- County-aware filtering with priority boosts for exact and county matches
- Multi-factor scoring combining relevance, distance, and species diversity
- Specialized handling for features like lighthouse, wetlands, migration, and more

## 🌤️ **Weather & Conditions**
- Real-time weather, sunrise/sunset, and tide predictions
- Coastal proximity with low tide prioritization for shorebirds
- Weather-aware AI recommendations and trend analysis

## 🔊 **Enhanced Voice Experience**
- High-quality TTS with configurable voices
- Robust audio session management and error suppression

## 🛠️ **Technical Excellence**
- SwiftUI, Core Data, Core Location, MapKit, and MLX Swift
- GeoJSON region detection and cached map annotations
- Device-aware MLX configuration with stable defaults and graceful fallbacks

GoBirding transforms birding from a research-heavy activity into a seamless, voice-powered experience that helps you discover amazing locations and make the most of your time in the field. With the most comprehensive database of birding locations available, on-device AI, and an interactive map interface, GoBirding is the ultimate companion for birding enthusiasts across North America. 