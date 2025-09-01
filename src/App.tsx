import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/common/Navigation';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
// import BlogPage from './pages/BlogPage';
// import BlogPostPage from './pages/BlogPostPage';

// Page transition animations
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};


const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    // transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-400 mb-6">
              Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// 404 Not Found Component
const NotFound: React.FC = () => {
  return (
    <PageWrapper>
      <div className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300 mb-6">
              Page Not Found
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <span>Go Home</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          {/* Global background pattern */}
          <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djEwaDE0VjM0SDM2ek0wIDM0djEwaDE0VjM0SDB6bTM2LTM0djEwaDE0VjBIMzZ6TTAgMHYxMGgxNFYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] pointer-events-none" />

          {/* Navigation */}
          <Navigation />

          {/* Main Routes */}
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <HomePage />
                  </PageWrapper>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageWrapper>
                    <ProjectsPage />
                  </PageWrapper>
                }
              />
              {/* <Route
                path="/blog"
                element={
                  <PageWrapper>
                    <BlogPage />
                  </PageWrapper>
                }
              />
              <Route
                path="/blog/:id"
                element={
                  <PageWrapper>
                    <BlogPostPage />
                  </PageWrapper>
                }
              /> */}
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4">Portfolio</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Full Stack Developer passionate about creating innovative
                    solutions and beautiful user experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link to="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      Home
                    </Link>
                    <Link to="/projects" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      Projects
                    </Link>
                    <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      Blog
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-4">Connect</h3>
                  <div className="space-y-2">
                    <a href="mailto:contact@email.com" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      Email
                    </a>
                    <a href="https://github.com" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      GitHub
                    </a>
                    <a href="https://linkedin.com" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Nguyen Vinh Hung. All rights reserved.
                </p>
              </div>
            </div>
          </footer>

          {/* Scroll to top button */}
          <ScrollToTop />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;