function [J, grad] = linearRegCostFunction(X, y, theta, lambda)
%LINEARREGCOSTFUNCTION Compute cost and gradient for regularized linear 
%regression with multiple variables
%   [J, grad] = LINEARREGCOSTFUNCTION(X, y, theta, lambda) computes the 
%   cost of using theta as the parameter for linear regression to fit the 
%   data points in X and y. Returns the cost in J and the gradient in grad

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;
grad = zeros(size(theta));

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost and gradient of regularized linear 
%               regression for a particular choice of theta.
%
%               You should set J to the cost and grad to the gradient.
%
%size(X) %12 2
%size(y) %12 1
%size(theta) %2 1

H = X*theta; %12x1
G = H - y; %12x1
J = G .^ 2; %12x1
REG = lambda * sum(theta(2:end) .^ 2);

J = 1/(2*m) * (sum(J) + REG);

grad(1) = X(:,1)'*G;
grad(2:end) = X(:,2:end)'*G + lambda * theta(2:end);

grad *= 1/m;






% =========================================================================

grad = grad(:);

end
