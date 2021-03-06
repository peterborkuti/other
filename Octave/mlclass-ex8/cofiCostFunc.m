function [J, grad] = cofiCostFunc(params, Y, R, num_users, num_movies, ...
                                  num_features, lambda)
%COFICOSTFUNC Collaborative filtering cost function
%   [J, grad] = COFICOSTFUNC(params, Y, R, num_users, num_movies, ...
%   num_features, lambda) returns the cost and gradient for the
%   collaborative filtering problem.
%

% Unfold the U and W matrices from params
X = reshape(params(1:num_movies*num_features), num_movies, num_features);
Theta = reshape(params(num_movies*num_features+1:end), ...
                num_users, num_features);

            
% You need to return the following values correctly
J = 0;
X_grad = zeros(size(X)); % num_movies x num_features
Theta_grad = zeros(size(Theta)); % num_users x num_features

% ====================== YOUR CODE HERE ======================
% Instructions: Compute the cost function and gradient for collaborative
%               filtering. Concretely, you should first implement the cost
%               function (without regularization) and make sure it is
%               matches our costs. After that, you should implement the 
%               gradient and use the checkCostFunction routine to check
%               that the gradient is correct. Finally, you should implement
%               regularization.
%
% Notes: X - num_movies  x num_features matrix of movie features
%        Theta - num_users  x num_features matrix of user features
%        Y - num_movies x num_users matrix of user ratings of movies
%        R - num_movies x num_users matrix, where R(i, j) = 1 if the 
%            i-th movie was rated by the j-th user
%
% You should set the following variables correctly:
%
%        X_grad - num_movies x num_features matrix, containing the 
%                 partial derivatives w.r.t. to each element of X
%        Theta_grad - num_users x num_features matrix, containing the 
%                     partial derivatives w.r.t. to each element of Theta
%

% size(X) 5 x 3
%size(Y) 5 x 4
%size(R) 5 x 4
%size(Theta) 4 x 3
%num_movies 5
%num_features 3
%num_users 4
%X : num_movies x num_features
%R : num_movies x num_users ; R(i,j) : is movie i rated by user j?
%Y : num_movies x num_users ; Y(i,j) : rating of movie i by user j
%Theta: num_users x num_features
%keyboard;

SUM2THETA = sum(sum(Theta .^ 2));
SUM2X = sum(sum(X .^ 2));

% X * Theta' -> 
MUL = X * Theta'; % num_movies x num_users
MULR = MUL .* R; %only rated 
DIFF = MULR - ( Y .* R );
DIFF2 = DIFF .^ 2; %5 x 4

J = sum(sum(DIFF2))/2 + lambda/2 * (SUM2THETA + SUM2X);

for i=1:num_movies
%users, who rated movie i
%idx: columns of rows i where value is 1
idx=find(R(i,:)==1); % 1-row vector, columns: rating-users 
%Thetas for rating-users
Thetatemp=Theta(idx,:); %rating-users x num_features
%Ys for rating-users
Ytemp=Y(i,idx); % rating of rating-users for movie i
X_grad(i,:) = (X(i,:)*Thetatemp' - Ytemp)*Thetatemp;

end

for j=1:num_users
%movies rated by user i
idx=find(R(:,j)==1); %1-column vector, rows: rated-movies
%Xs for rated movies by user j
Xtemp=X(idx,:);
%Ys for rated-movies by user j
Ytemp=Y(idx,j);
Theta_grad(j,:) = (Theta(j,:)*Xtemp' - Ytemp')*Xtemp;

end

X_grad = X_grad + lambda * X;
Theta_grad = Theta_grad + lambda * Theta;
%X_grad = DIFF * Theta + lambda * X; %5x4 * 4x3 = 5x3
%Theta_grad = DIFF' * X + lambda * Theta; %4x5 * 5x3 = 4x3

% =============================================================

grad = [X_grad(:); Theta_grad(:)];

end
