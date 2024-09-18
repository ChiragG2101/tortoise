# Tortoise Assignment

## Overview

This repository contains the assignment completed for Tortoise. The project was built using **Next.js**, **Tailwind CSS**, **Typescript**, **ShadCN**, and **Phosphoricons**, aiming to align closely with the UI provided in the assignment's Figma design.

## Tech Stack

### 1. **Next.js**

- Next.js was used for its powerful **React framework** capabilities, allowing for **server-side rendering (SSR)** and **static site generation (SSG)**, both of which are useful for building fast and SEO-friendly applications. Its routing and API handling are straightforward, making it a great choice for this project.

### 2. **Tailwind CSS**

- Tailwind CSS was selected for **utility-first styling**, enabling a **responsive** and **customizable** design. I configured Tailwind with the Tortoise theme, though I didn't extensively apply the design system since the assignment Figma UI didn't directly indicate adherence to it. Tailwind’s flexibility helped to quickly align styles with the provided design.

### 3. **Typescript**

- Typescript ensured **type safety** across the entire codebase. This was particularly important for catching errors during development and providing a more robust, maintainable code. It also facilitated easier collaboration and scaling in the future.

### 4. **ShadCN**

- ShadCN components were used, but I customized them as per the unique requirements of the design system and the assignment's Figma UI. By minimizing the reliance on external libraries and heavily tweaking these components, I was able to closely replicate the provided design while maintaining a lightweight codebase.

### 5. **Phosphoricons**

- Phosphoricons were used to bring in **modern, customizable icons** that seamlessly fit the aesthetic of the UI. They are lightweight and provide flexible scaling, making them a good fit for both small and large screens.

### 6. **Yarn**

- Yarn was used as the package manager for this project due to its speed and **reliability** in managing dependencies efficiently. It also provides a better lock file for secure dependency management, ensuring consistency across different environments.

### 7. **ESLint**

- ESLint was integrated to enforce consistent **coding standards** and identify any potential issues early in the development process. It contributed to the overall quality of the codebase by catching bugs and enforcing best practices.

## Development Process

### 1. **Tailwind Configuration**

- I began by configuring **Tailwind CSS** with the **Tortoise theme**. Although the theme configuration was set, I didn't extensively use it since the Figma UI didn't strictly follow the Tortoise design system. Instead, I focused on aligning the component styling directly with the Figma designs.

### 2. **Custom Component Development**

- While building the UI components, I prioritized keeping the codebase **lightweight** by minimizing external library usage. Instead of heavily relying on pre-built ShadCN components, I customized them to align with both the **Tortoise design system** and the **specific requirements** of the Figma UI. This allowed for greater flexibility and adherence to the provided design without introducing unnecessary complexity.

### 3. **Type Safety**

- Throughout the project, I ensured that **type-safe code** was maintained using Typescript. This helped in **catching errors early** and **improving code quality**, especially when handling component props, API responses, and state management.

## Setup

To run this project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

The application will run locally, and you can access it via `http://localhost:3000`.

## Conclusion

This project demonstrates a thoughtful approach to UI development with a focus on **customization**, **type safety**, and **library minimization**. By using **Next.js**, **Tailwind CSS**, **Typescript**, and other tools, I was able to deliver a clean, efficient, and scalable implementation that aligns with the Figma designs provided by Tortoise.
