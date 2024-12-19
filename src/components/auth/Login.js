import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <img src="/assets/logo.svg" alt="CodeAnt AI" className="mx-auto h-12" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome to CodeAnt AI
          </h2>
        </div>
        
        <div className="mt-8 space-y-4 bg-white p-8 shadow rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-4xl font-bold">500K+</span>
              <div className="text-sm text-gray-500">Security Issues Fixed</div>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full justify-center"
            onClick={() => navigate('/repositories')}
          >
            <span className="mr-2">Sign in with GitHub</span>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-center"
          >
            <span className="mr-2">Sign in with Bitbucket</span>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-center"
          >
            <span className="mr-2">Sign in with Azure DevOps</span>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-center"
          >
            <span className="mr-2">Sign in with GitLab</span>
          </Button>

          <p className="mt-4 text-center text-sm text-gray-500">
            By signing up you agree to the{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;