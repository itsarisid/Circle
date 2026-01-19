# Circle - Advanced Angular Dashboard

Circle is a modern, responsive administrative dashboard template built with Angular 19, Angular Material, and Tailwind CSS. It features a flexible layout system that supports both standard dashboard views and complex data-management interfaces.

## 🚀 Key Features

### 1. Dynamic Layout System
Toggle seamlessly between two distinct layout modes:
- **Main Dashboard Mode**: Standard sidebar navigation and global header.
- **Page Controls Mode**: A specialized view for data-heavy pages (e.g., Contacts, Tasks) featuring:
  - **Sub-Header**: Page title, "Create New" actions, bulk operations, sorting, and pagination.
  - **Sub-Sidebar**: Dedicated filtering, labels, tags, and secondary actions.
  - **Toggle**: Easy switching between modes via a floating action button.

### 2. Enhanced Header Components
- **Dynamic Breadcrumbs**: Automatically generated breadcrumb navigation based on routing.
- **Global Search**: Reddit-style centered search bar with focus effects.
- **Language Switcher**: Support for English (en), Hindi (hi), and Arabic (ar) with distinct flag icons.
- **Notification Center**: Rich dropdown with notification types (info, success, warning, error) and read/unread status.
- **User Profile**: Detailed dropdown with user avatar, role, email, last login timestamp, and quick navigation links.

### 3. Sub-Layout Components
Circle includes reusable components for building complex management interfaces:
- **`app-sub-header`**: Includes built-in support for:
  - Search input
  - Bulk Actions (Delete, Archive, Export)
  - Sort selection
  - View toggles (Grid/List)
  - Pagination controls
- **`app-sub-sidebar`**: Includes:
  - Primary Action Button
  - Filter lists with counts
  - Collapsible Label and Tag sections
  - Action buttons (Export, Import)

## 🛠️ Technology Stack
- **Framework**: Angular 19
- **UI Library**: Angular Material
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons & Iconify (Solar set)
- **Internationalization**: ngx-translate

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Circle
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## 🎨 Branding
The application uses a "Circle" branding theme with text next to the logo in the sidebar, supporting both light and dark modes.

---
*Developed with ❤️ by SafeLoop Team*