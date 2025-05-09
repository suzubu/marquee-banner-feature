# 🔁 Marquee Component

> A flexible, full-width, endlessly scrolling marquee component built with React + GSAP. Supports tilt, speed control, direction (left/right), and hover pause.

---

## 🖼 Preview

![Marquee Demo](media/marquee-preview.gif)


---

## ⚙️ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/suzubu/marquee-banner-feature.git

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

> Built with:
> - [React](https://reactjs.org/)
> - [GSAP](https://greensock.com/gsap/)
> - [Vite](https://vitejs.dev/)

---

## ✨ Features

- 🔁 Infinite loop with auto-repeat logic
- ⚡ Speed set in pixels/second (e.g. `speed={100}`)
- 🧲 Pause on hover (optional)
- 💫 Optional tilt via `tilt="5deg"`
- 🧭 Directional scroll (`"left"` or `"right"`)
- 📏 Viewport-aware content duplication

---

## 💡 Dev Notes

- Uses `useMemo` to calculate how many repeats are needed based on screen width
- GSAP animates the entire wrapper, not the content spans individually
- Tilt is handled with inline styles, fully controlled via props
- `overflow-x: hidden` should be set on `body` to prevent scrollbars


---

## 🧪 Known Issues

- ❌ No built-in support for dynamic resizing (e.g. if window resizes after load)
- ❌ All items scroll at equal spacing — no variable offset yet

---

## 🔭 Roadmap / TODO

- [ ] Add support for resizing/observer
- [ ] Add `gap` prop to control spacing between repeats
- [ ] Add vertical scrolling mode

---

## 📂 Folder Structure

```bash
react-marquee/
├── components/
│   └── Marquee.jsx
├── styles/
│   └── marquee.css
├── App.jsx
├── main.jsx
├── index.html
├── media/
│   └── marquee-preview.gif
└── README.md
```

---

## 📜 License

MIT — feel free to use and adapt!

---

## 🙋‍♀️ Author

Made with ☕ + 🎧 by [suzubu](https://github.com/suzubu)  
Questions or ideas? Reach out anytime.
