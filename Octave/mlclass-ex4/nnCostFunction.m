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
%keyboard 

% ====================== YOUR CODE HERE ======================
% Instructions: You should complete the code by working through the
%               following parts.
%
% Part 1: Feedforward the neural network and return the cost in the
%         variable J. After implementing Part 1, you can verify that your
%         cost function computation is correct by verifying the cost
%         computed in ex4.m
%
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

%PART 1 - FEEDFORWARD
%X 5000x400
%Theta1 25x401
%Theta2 10x26
Y = eye(num_labels)(y, :); %5000x10
%T1 = [ones(1,size(Theta1,2)); Theta1]; %26x401
%T2 = Theta2; %10x26

a1 = [ones(size(X,1),1) X]; %5000x401;
z2 = a1 * Theta1'; %5000x401 * %401x25 => 5000x25
a2 = sigmoid(z2); %5000x25

a2 = [ones(size(a2,1),1) a2]; %5000x26
z3 = a2 * Theta2'; %5000x26 * 26x10 => 5000x10
H = sigmoid(z3); %5000x10
%keyboard
%PART 2
REG_TERM = (lambda/(2*m)) * (sum(sum(Theta1(:,2:end) .^ 2)) + sum(sum(Theta2(:,2:end) .^ 2)));
J = (1/m) * (sum(sum(- Y .* log(H) - (1-Y) .* log(1-H)))) + REG_TERM ; %R

%PART 3 - step 2

d3 = H - Y; %5000x10

%PART 3 - step 3
%keyboard
d2 = d3 * Theta2(:,2:end) .* sigmoidGradient(z2); % 5000x10 * 10x25 .* 5000x25

%PART 3 - step 4
%d2 = d2(:,2:end); %5000x25
%a2 = a2(:,2:end); %5000x25

D2 = d3' * a2; %10x5000 * 5000*26 => 10x26
D1 = d2' * a1; %25x5000 * 5000*401 => 25x401

%PART 3 - step 5
%keyboard
%25x401
Theta1_grad(:,1) = 1/m * D1(:,1);
Theta1_grad(:,2:end) = 1/m * (D1(:,2:end) + lambda*Theta1(:,2:end));

Theta2_grad(:,1) = 1/m * D2(:,1);
Theta2_grad(:,2:end) = 1/m * (D2(:,2:end) + lambda*Theta2(:,2:end));

%keyboard
% -------------------------------------------------------------

% =========================================================================

% Unroll gradients
grad = [Theta1_grad(:) ; Theta2_grad(:)];


end
