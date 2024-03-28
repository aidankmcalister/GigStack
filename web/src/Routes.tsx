import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/profile" page={ProfilePage} name="profile" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/posted-gigs" page={PostedGigsPage} name="postedGigs" />
        <Route path="/attending-gigs" page={AttendingGigsPage} name="attendingGigs" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
