function [J grad] = nnCostFunction(nn_params, ...
                                   input_layer_size, ...
                                   hidden_layer_size, ...
                                   num_labels, ...
                                   X, y, lambda)
%NNCOSTFUNCTION Implements the neural network cost function for a two layer
%neural network which performs classification
%   [J grad] = NNCOSTFUNCTON(nn_params, hidden_layer_size, num_labels, ...
%   X, y, lambda) computes the cost and gradient of the neural network. The
%   parameters for the neural network are "unrolled" into the vector
%   nn_params and need to be converted back into the weight matrices. 
% 
%   The returned parameter grad should be a "unrolled" vector of the
%   partial derivatives of the neural network.
%

% Reshape nn_params back into the parameters Theta1 and Theta2, the weight matrices
% for our 2 layer neural network
Theta1 = reshape(nn_params(1:hidden_layer_size * (input_layer_size + 1)), ...
                 hidden_layer_size, (input_layer_size + 1));

Theta2 = reshape(nn_params((1 + (hidden_layer_size * (input_layer_size + 1))):end), ...
                 num_labels, (hidden_layer_size + 1));
% Setup some useful variables
m = size(X, 1); % m = 5000
         
% You need to return the following variables correctly 
J = 0;
Theta1_grad = zeros(size(Theta1)); % 25 x 401
Theta2_grad = zeros(size(Theta2)); % 10 x 26

% ====================== YOUR CODE HERE ======================
% Instructions: You should complete the code by working through the
%               following parts.
%
% Part 1: Feedforward the neural network and return the cost in the
%         variable J. After implementing Part 1, you can verify that your
%         cost function computation is correct by verifying the cost
%         computed in ex4.m
%

%X = [ones(size(X,1),1) X];
%size(X) % 5000 x 401
%Theta1 = [ones(1,size(Theta1,2)); Theta1];
%size(Theta1) 26 x 401
%size(Theta2) 10 x 26
%size(y) 5000 x 1
%input_layer_size
%hidden_layer_size
%for i=1:m
% a1 = (X(i,:))'; % 401 x 1
% z2 = Theta1 * a1; % 26x401 * 401x1 => 26x1
% a2 = sigmoid(z2); % 26x1
% z3 = Theta2 * a2; % 10x26 * 26x1 => 10x1
% H = sigmoid(z3); % 10x1
% %h = H > 0.5;
% yi = [1:num_labels] == y(i); % 1x10
% j = yi * log(H) + (1 - yi) * log(1 - H); % 1x10 * 10x1
% J = J - j;
 %keyboard
%end
%J = 1/m * J;
% Part 2: Implement the backpropagation algorithm to compute the gradients
%         Theta1_grad and Theta2_grad. You should return the partial derivatives of
%         the cost function with respect to Theta1 and Theta2 in Theta1_grad and
%         Theta2_grad, respectively. After implementing Part 2, you can check
%         that your implementation is correct by running checkNNGradients
%
%         Note: The vector y passed into the function is a vector of labels
%               containing values from 1..K. You need to map this vector into a 
%               binary vector of 1's and 0's to be used with the neural network
%               cost function.
%
%         Hint: We recommend implementing backpropagation using a for-loop
%               over the training examples if you are implementing it for the 
%               first time.
%
% Part 3: Implement regularization with the cost function and gradients.
%
%         Hint: You can implement this around the code for
%               backpropagation. That is, you can compute the gradients for
%               the regularization separately and then add them to Theta1_grad
%               and Theta2_grad from Part 2.
%

Y = eye(num_labels)(y, :); %5000x10
a1 = [ones(size(X,1),1) X]; %5000x401;
T1 = [ones(1,size(Theta1,2)); Theta1]; %26x401
z2 = a1 * T1'; %5000x401 * 401x26 => 5000x26
a2 = sigmoid(z2); %5000x26
z3 = a2 * Theta2'; %5000x26 * 26x10 => 5000x10
H = sigmoid(z3); %5000x10
J -= Y .* log(H); %5000x10 .* 5000x10
J -= (1-Y) .* log(1-H); %5000x10 .* 5000x10
J = 1/m * sum(sum(J));

















% -------------------------------------------------------------

% =========================================================================

% Unroll gradients
grad = [Theta1_grad(:) ; Theta2_grad(:)];


end
