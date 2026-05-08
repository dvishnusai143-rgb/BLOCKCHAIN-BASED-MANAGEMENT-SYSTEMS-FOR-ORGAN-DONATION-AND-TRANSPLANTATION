# Organ Donation System

A comprehensive full-stack web application for organ donation management with modern UI and complete functionality.

## 🌟 Features

### Frontend (Pixel-Perfect UI)
- **Modern Landing Page**: Hero section with gradient background, statistics cards, and smooth animations
- **User Authentication**: Beautiful card-based login and registration forms
- **Admin Dashboard**: Professional sidebar navigation with donor management table
- **User Dashboard**: Application status tracking with statistics and detailed information
- **Hospital Dashboard**: Real-time application management with approval/rejection functionality
- **Feedback System**: Interactive star rating and comprehensive feedback forms
- **Responsive Design**: Mobile-friendly layout with Bootstrap 5
- **Modern Animations**: Smooth transitions, hover effects, and loading states

### Backend (Node.js + Express + MongoDB)
- **RESTful APIs**: Complete CRUD operations for users and applications
- **Authentication**: Secure user registration and login with bcrypt password hashing
- **Database Integration**: MongoDB with Mongoose ODM for data persistence
- **CORS Support**: Cross-origin resource sharing enabled
- **Error Handling**: Comprehensive error management and validation

### Complete User Flow
1. **User Registration** → Account creation with organ donation application
2. **User Login** → Secure authentication with session management
3. **Application Submission** → Comprehensive form with medical information
4. **Admin Dashboard** → View and manage all donor applications
5. **Hospital Verification** → Update application status (Fit/Unfit/Under Test)
6. **User Status Tracking** → Real-time application status updates
7. **Feedback Collection** → Star ratings and detailed feedback system

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)
- Modern web browser

### Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install express mongoose cors body-parser bcryptjs jsonwebtoken
   ```

3. **Start the backend server**
   ```bash
   node server.js
   ```
   Backend will run on `http://localhost:5000`

4. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

5. **Start the frontend server**
   ```bash
   npx serve -s . -l 5500
   ```
   Frontend will run on `http://localhost:5500`

### Access Points
- **Frontend**: http://localhost:5500
- **Backend API**: http://localhost:5000
- **Admin Dashboard**: http://localhost:5500/admin.html
- **User Dashboard**: http://localhost:5500/dashboard.html
- **Hospital Dashboard**: http://localhost:5500/hospital.html

## 📁 Project Structure

```
organ-donation/
├── backend/
│   ├── models/
│   │   ├── User.js          # User schema and model
│   │   └── Application.js   # Application schema and model
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── application.js   # Application management routes
│   ├── package.json         # Node.js dependencies
│   └── server.js            # Express server setup
├── frontend/
│   ├── index.html           # Landing page
│   ├── login.html           # User login
│   ├── register.html        # User registration
│   ├── dashboard.html       # User dashboard
│   ├── admin.html           # Admin dashboard
│   ├── hospital.html        # Hospital dashboard
│   ├── feedback.html        # Feedback page
│   └── style.css           # Global styles
└── README.md               # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Application Management
- `POST /api/application/apply` - Submit organ donation application
- `GET /api/application` - Get all applications
- `PUT /api/application/:id` - Update application status

## 🎨 UI Components

### Pages
1. **Landing Page** (`index.html`)
   - Hero section with call-to-action
   - Statistics cards with animations
   - Navigation menu with smooth scrolling

2. **Login Page** (`login.html`)
   - Modern card design with gradient background
   - Form validation and error handling
   - Social login options (Admin/Hospital)

3. **Registration Page** (`register.html`)
   - Multi-step registration process
   - Organ selection with visual cards
   - Progress indicator
   - Comprehensive form validation

4. **Admin Dashboard** (`admin.html`)
   - Professional sidebar navigation
   - Donor management table with real-time data
   - Blockchain verification buttons
   - Search and filter functionality

5. **User Dashboard** (`dashboard.html`)
   - Application status overview
   - Statistics cards with gradients
   - Detailed application information
   - Certificate download and support options

6. **Hospital Dashboard** (`hospital.html`)
   - Application management interface
   - Status update functionality
   - Real-time data synchronization

7. **Feedback Page** (`feedback.html`)
   - Interactive star rating system
   - Multiple feedback types
   - Recent feedback display
   - Form validation and submission

### Design Features
- **Gradient Backgrounds**: Modern color schemes throughout
- **Card-Based Layouts**: Clean and organized content presentation
- **Smooth Animations**: Fade-in effects, hover states, and transitions
- **Responsive Grid**: Mobile-first design approach
- **Icon Integration**: Font Awesome icons for visual enhancement
- **Loading States**: Spinners and progress indicators
- **Error Handling**: User-friendly alert messages

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  email: String,
  password: String,  // Hashed with bcrypt
  role: String       // user/admin/hospital
}
```

### Application Model
```javascript
{
  name: String,
  fatherName: String,
  email: String,
  phone: String,
  city: String,
  disease: String,
  gender: String,
  dob: String,
  organs: [String],
  status: String     // Pending/Under Test/Fit/Unfit/Approved
}
```

## 🔐 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **Input Validation**: Comprehensive form validation
- **CORS Configuration**: Proper cross-origin resource sharing
- **Error Handling**: Secure error message display
- **Data Sanitization**: Input sanitization to prevent XSS

## 🎯 Status Flow

1. **Pending** → Application submitted, awaiting review
2. **Under Test** → Medical tests in progress
3. **Fit** → Medically approved for donation
4. **Unfit** → Not eligible for donation
5. **Approved** → Final approval, certificate issued

## 🌟 Special Features

### Blockchain Verification
- Integration ready for blockchain-based verification
- Secure certificate generation
- Transparent donation tracking

### Real-time Updates
- Live status updates across all dashboards
- Instant notification system
- Data synchronization

### Modern UI/UX
- Micro-interactions and animations
- Gradient designs and shadows
- Professional color schemes
- Accessibility considerations

## 📱 Responsive Design

- **Mobile**: Optimized for phones and tablets
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience for large screens

## 🚀 Deployment

### Production Setup
1. Set up MongoDB Atlas or self-hosted MongoDB
2. Configure environment variables
3. Build and optimize frontend assets
4. Deploy to cloud platform (Heroku, AWS, etc.)

### Environment Variables
```bash
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/organDonation
JWT_SECRET=your-secret-key
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

- **Phone**: +91 8555 8879 86
- **Email**: support@organdonation.com
- **Issues**: Report via GitHub Issues

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Bootstrap 5 for responsive framework
- Font Awesome for icons
- MongoDB for database
- Node.js for backend runtime
- Express.js for web framework

---

**Built with ❤️ for saving lives through organ donation**
