# Social Media Frontend

Этот проект — учебная социальная сеть, созданная для изучения **React** и сопутствующих технологий фронтенд-разработки. Главная цель — освоить современные подходы к архитектуре, сборке, тестированию и локализации приложений на React.

## 🧱 Технологии

* ⚛️ **React**
* 🧽 **React Router DOM**
* 🖠 **TypeScript**
* 🧹 **FSD (Feature-Sliced Design)** — архитектурный подход
* 📆 **Webpack** — настройка сборки с нуля
* 🌍 **i18n** — интернационализация
* 🧪 **Jest** — модульное тестирование
* 📖 **Storybook (планируется)** — изоляция UI-компонентов

## 📁 Структура проекта

```
├── config/build/        # Конфигурации сборщика (Webpack)
├── public/              # Публичные ресурсы (index.html и др.)
├── src/                 # Исходный код (в соответствии с FSD)
├── package.json         # Зависимости и скрипты
├── tsconfig.json        # Конфигурация TypeScript
├── webpack.config.ts    # Общая конфигурация Webpack
```

## 🚀 Запуск проекта

Убедитесь, что у вас установлен Node.js.

### Установка зависимостей

```bash
npm install
```

### Сборка проекта в режиме разработки

```bash
npm run build:dev
```

### Сборка проекта в продакшн-режиме

```bash
npm run build:prod
```

## 🔭 Планы по доработке

* ✅ Настройка архитектуры проекта по принципам FSD
* ⏳ Подключение WebSocket для реалтайм-функций
* ✅ Добавление i18n для поддержки нескольких языков
* ✅ Настройка тестирования с помощью Jest
* ⏳ Storybook для разработки UI в изоляции

## 📚 Цель

Создание учебного, но функционального приложения, которое может использоваться как база или заготовка для более серьёзных проектов на React.
