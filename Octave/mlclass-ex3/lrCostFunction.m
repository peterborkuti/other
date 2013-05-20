function [J, grad] = lrCostFunction(theta, X, y, lambda)
%LRCOSTFUNCTION Compute cost and gradient for logistic regression with 
%regularization
%   J = LRCOSTFUNCTION(theta, X, y, lambda) computes the cost of using
%   theta as the parameter for regularized logistic regression and the
%   gradient of the cost w.r.t. to the parameters. 

% Initialize some useful values
m = length(y); % number of training examples

% You need to return the following variables correctly 
J = 0;
grad = zeros(size(theta));

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost of a particular choice of theta.
%               You should set J to the cost.
%               Compute the partial derivatives and set grad to the partial
%               derivatives of the cost w.r.t. each parameter in theta
%
% Hint: The computation of the cost function and gradients can be
%       efficiently vectorized. For example, consider the computation
%
%           sigmoid(X * theta)
%
%       Each row of the resulting matrix will contain the value of the
%       prediction for that example. You can make use of this to vectorize
%       the cost function and gradient computations. 
%
% Hint: When computing the gradient of the regularized cost function, 
%       there're many possible vectorized solutions, but one solution
%       looks like:
%           grad = (unregularized gradient for logistic regression)
%           temp = theta; 
%           temp(1) = 0;   % because we don't add anything for j = 0  
%           grad = grad + YOUR_CODE_HERE (using the temp variable)
%


H = sigmoid(X*theta);
j_ = -y' * log(H) - (1 - y)'*log(1-H);
reg = lambda/(2*m)*(theta'*theta - theta(1)^2);
J = (1/m)*j_ + reg;

%size(X) 		5000    401
%size(theta)	401     1
%size(y)		5000      1
%size(j_)		1       1
%size(reg)		1       1
%size(grad)		401     1

%H 5000 1
grad = X' * (H - y); % 401 5000 * 5000 1 -> 401 1
temp = theta; % 401 1
temp(1) = 0;
grad = grad + lambda*temp;

%size(lambda) 1 1

%grad(1) =  (H - y)'*X(:,1);
%for j=2:size(theta)
%	grad(j) =  (H - y)'*X(:,j) + lambda*theta(j);
%end


grad = (1/m)*grad;

%size(grad) %401 1

% =============================================================

%grad = grad(:);

end
